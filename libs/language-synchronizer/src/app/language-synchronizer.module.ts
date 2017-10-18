import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LanguageChangeSubscriberService} from './language-change-subscriber.service';
import {LanguageChangeEmitterService} from './language-change-emitter.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: []
})
export class LanguageSynchronizerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LanguageSynchronizerModule,
            providers: [
                LanguageChangeEmitterService
            ]
        };
    }

    static forChild(): ModuleWithProviders {
        return {
            ngModule: LanguageSynchronizerModule,
            providers: [
                LanguageChangeSubscriberService
            ]
        };
    }


}
