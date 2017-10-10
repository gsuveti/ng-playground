import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CoolComponent} from './cool/cool.component';


const ROUTES = [
    {
        path: '',
        component: CoolComponent
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
export class CoolRoutingModule {
}
