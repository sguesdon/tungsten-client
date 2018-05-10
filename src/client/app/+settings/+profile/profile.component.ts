// angular
import { Component } from '@angular/core';
// framework
import { BaseComponent } from '~/app/framework/core/core.module';
import { I18NService, Language } from '~/app/framework/i18n/i18n.module';
// app

@Component({
  templateUrl: './profile.component.html',
  styleUrls: [
      'profile.component.scss'
  ]
})
export class ProfileComponent extends BaseComponent {
    private availableLanguages: Array<Language>;
    constructor(i18nService : I18NService) {
        this.availableLanguages = i18nService.availableLanguages;
        console.log(i18nService);
        super();
    }
}
