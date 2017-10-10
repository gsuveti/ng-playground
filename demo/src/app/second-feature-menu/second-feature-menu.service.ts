import {Injectable} from '@angular/core';
import {MenuService} from '../menu/menu.service';

@Injectable()
export class SecondFeatureMenuService extends MenuService {

  constructor() {
    super();
  }

  getMenus(): Menu[] {
    return [{
      label: 'feature2',
      link: '/feature2'
    }]
  }
}
