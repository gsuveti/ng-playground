import {Inject, Injectable, Optional} from '@angular/core';
import {MenuService} from '../menu/menu.service';

@Injectable()
export class MenuBuilderService {

  constructor(@Inject(MenuService) @Optional() private menuServices: MenuService[]) {

  }


  buildMenu(): Menu[] {
    if (this.menuServices) {
      return this.menuServices.reduce((menus, menuService: MenuService) => {
        return menus.concat(menuService.getMenus());
      }, []);
    } else {
      return [];
    }
  }
}
