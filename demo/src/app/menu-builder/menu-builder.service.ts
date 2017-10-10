import {Inject, Injectable, Optional} from '@angular/core';
import {MenuService} from '../menu/menu.service';

@Injectable()
export class MenuBuilderService {

  constructor(@Inject(MenuService) @Optional() private menuServices: MenuService[]) {

  }


  buildMenu(): Menu[] {
    let menus: Menu[] = [];
    this.menuServices.map((menuService: MenuService) => {
      menus.push(...menuService.getMenus());
    });
    return menus;
  }
}
