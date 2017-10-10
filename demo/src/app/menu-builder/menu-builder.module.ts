import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuBuilderService} from './menu-builder.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[MenuBuilderService]
})
export class MenuBuilderModule { }
