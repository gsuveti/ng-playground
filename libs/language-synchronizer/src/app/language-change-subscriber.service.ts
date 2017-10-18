import {Injectable} from '@angular/core';
import {LanguageChangeEmitterService} from './language-change-emitter.service';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class LanguageChangeSubscriberService {
    constructor(private translateService: TranslateService,
                private languageChangeEmitterService: LanguageChangeEmitterService) {
        this.languageChangeEmitterService.getLangChangeEmmiter().subscribe((lang) => {
            translateService.use(lang);
        })
    }
}
