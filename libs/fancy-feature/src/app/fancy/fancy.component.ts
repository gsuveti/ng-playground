import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguageChangeSubscriberService} from '@ng-playground/language-synchronizer/public_api';

@Component({
    selector: 'ff-fancy',
    templateUrl: './fancy.component.html',
    styleUrls: ['./fancy.component.scss']
})
export class FancyComponent implements OnInit {
    lang: string;

    constructor(private translateService: TranslateService,
                private languageChangeSubscriberService: LanguageChangeSubscriberService) {
        this.lang = "en";
        translateService.use(this.lang);
        translateService.onLangChange.subscribe((data) => {
            this.lang = data.lang;
        })
    }

    ngOnInit() {
    }

    changeLang() {
        this.lang = this.lang === "en" ? "de" : "en";
        this.translateService.use(this.lang);
    }

}
