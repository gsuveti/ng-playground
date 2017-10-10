import {Injectable} from '@angular/core';
import {MenuService} from '../menu/menu.service';

@Injectable()
export class FirstFeatureMenuService extends MenuService {

  constructor() {
    super();
  }

  getMenus(): Menu[] {
    return [{
      label: 'feature1',
      link: '/feature1'
    }]
  }

}
