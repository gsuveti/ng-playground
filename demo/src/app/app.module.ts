import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoolModule} from '@ng-playground/cool-feature/public_api';
import {FirstFeatureMenuModule} from './first-feature-menu/first-feature-menu.module';
import {SecondFeatureMenuModule} from './second-feature-menu/second-feature-menu.module';
import {MenuBuilderModule} from './menu-builder/menu-builder.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoolModule,
    AppRoutingModule,
    FirstFeatureMenuModule,
    SecondFeatureMenuModule,
    MenuBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
