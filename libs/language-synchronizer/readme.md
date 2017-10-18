## language-synchronizer

This is a helper module for [ngx-translate](ngx-translate). It syncs the language in the lazy loaded modules.


## install


    npm install @ng-playground/language-synchronizer


## usage

1. use LanguageSynchronizerModule.forRoot() in app module:

```
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    LanguageSynchronizerModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

2. lazy load the module


```

const routes: Routes = [{
    path: "fancy",
    loadChildren: '@ng-playground/fancy-feature#FancyModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

```

3. use TranslateModule.forRoot() and LanguageSynchronizerModule.forChild() in the lazy loaded module

```
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {LanguageSynchronizerModule} from '@ng-playground/language-synchronizer/public_api';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './fancy-feature/i18n/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        }),
        LanguageSynchronizerModule.forChild(),
        FancyRoutingModule
    ],
    declarations: [
        FancyComponent
    ],
    exports: []
})
export class FancyModule {

}
```

notice that the translations for the lazy loaded module are assets fetched from:

    /fancy-feature/i18n/[language].json
    
4. Inject the LanguageChangeSubscriberService service in the root component    

```$xslt
@Component({
    selector: 'ff-fancy',
    templateUrl: './fancy.component.html',
    styleUrls: ['./fancy.component.scss']
})
export class FancyComponent implements OnInit {
    lang: string;

    constructor(private translateService: TranslateService,
                private languageChangeSubscriberService: LanguageChangeSubscriberService) {
        this.lang = "en";
        translateService.use(this.lang);
        translateService.onLangChange.subscribe((data) => {
            this.lang = data.lang;
        })
    }

    ngOnInit() {
    }

    changeLang() {
        this.lang = this.lang === "en" ? "de" : "en";
        this.translateService.use(this.lang);
    }
}

```

    
If you are using scoped feature packages is pretty simple to copy and serve all the translations with angular cli. 

      "assets": [
        "assets",
        "i18n",
        "favicon.ico",
        {
          "glob": "**/i18n/*.json",
          "input": "../node_modules/@ng-playground/",
          "output": "./"
        }
      ]
      
## Demo

[ng-playground](https://github.com/gsuveti/ng-playground)
