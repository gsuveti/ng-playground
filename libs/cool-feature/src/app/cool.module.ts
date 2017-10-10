import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from "@angular/http";
import {CoolComponent} from './cool/cool.component';
import {CoolRoutingModule} from './cool-routing.module';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        CoolRoutingModule
    ],
    declarations: [
        CoolComponent
    ],
    exports: [
        CoolComponent
    ]
})
export class CoolModule {

}


