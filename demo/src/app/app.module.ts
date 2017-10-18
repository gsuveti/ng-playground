import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoolModule} from '@ng-playground/cool-feature/public_api';
import {FirstFeatureMenuModule} from './first-feature-menu/first-feature-menu.module';
import {SecondFeatureMenuModule} from './second-feature-menu/second-feature-menu.module';
import {MenuBuilderModule} from './menu-builder/menu-builder.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {LanguageSynchronizerModule} from '@ng-playground/language-synchronizer/public_api';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    LanguageSynchronizerModule.forRoot(),
    CoolModule,
    AppRoutingModule,
    FirstFeatureMenuModule,
    SecondFeatureMenuModule,
    MenuBuilderModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
