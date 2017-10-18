import {Component} from '@angular/core';
import {MenuBuilderService} from './menu-builder/menu-builder.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lang;
  title = 'app';
  menus: Menu[]

  constructor(private menuBuilderService: MenuBuilderService,
              private translateService: TranslateService) {
    this.menus = this.menuBuilderService.buildMenu();

    this.lang = "en";
    this.translateService.setDefaultLang(this.lang);
    this.translateService.use(this.lang);

  }

  changeLanguage() {
    this.lang = this.lang === "en" ? "de" : "en";
    this.translateService.use(this.lang);
  }
}
