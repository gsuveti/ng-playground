import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FancyComponent} from './fancy/fancy.component';
import {FancyRoutingModule} from './fancy-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
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
    exports: [
        FancyComponent
    ]
})
export class FancyModule {

}


