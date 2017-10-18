import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: "sample",
    loadChildren: '@ng-playground/sample-feature#SampleModule'
  }, {
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
