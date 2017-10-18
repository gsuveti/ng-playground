import {EventEmitter, Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class LanguageChangeEmitterService {
    private langChangeEmitter: EventEmitter<string> = new EventEmitter();

    constructor(private translateService: TranslateService) {
        this.translateService.onLangChange.subscribe((data) => {
            this.langChangeEmitter.emit(data.lang);
        })
    }

    getLangChangeEmmiter() {
        return this.langChangeEmitter;
    }
}
