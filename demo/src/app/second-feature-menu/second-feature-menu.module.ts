import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuService} from '../menu/menu.service';
import {SecondFeatureMenuService} from './second-feature-menu.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    {
      provide: MenuService,
      useClass: SecondFeatureMenuService,
      multi: true
    }
  ]
})
export class SecondFeatureMenuModule {
}
