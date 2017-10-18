import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FancyComponent} from './fancy/fancy.component';


const ROUTES = [
    {
        path: '',
        component: FancyComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class FancyRoutingModule {
}
