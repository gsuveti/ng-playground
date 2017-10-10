import {Component} from '@angular/core';
import {MenuBuilderService} from './menu-builder/menu-builder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  menus: Menu[]

  constructor(private menuBuilderService: MenuBuilderService) {
    this.menus = this.menuBuilderService.buildMenu();
  }
}
