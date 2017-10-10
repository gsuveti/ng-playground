import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuService} from '../menu/menu.service';
import {FirstFeatureMenuService} from './first-feature-menu.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    {
      provide: MenuService,
      useClass: FirstFeatureMenuService,
      multi: true
    }
  ]
})
export class FirstFeatureMenuModule {
}
