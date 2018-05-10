// angular
import { Component, OnInit, Output,  EventEmitter } from '@angular/core';
// libs
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { ConfigService } from '@ngx-config/core';
import { AuthService } from '@ngx-auth/core';
// framework
import { BaseComponent } from '~/app/framework/core/core.module';
import { getWorkingLanguage, Language } from '~/app/framework/i18n/i18n.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {

  title: string;
  currentLanguage$: Observable<Language>;
  availableLanguages: Array<Language>;
  isAuthenticated: boolean;

  @Output()
  menuState = new EventEmitter();
  menuStateValue: boolean = false;


  constructor(private readonly store: Store<Language>,
              private readonly config: ConfigService,
              private readonly auth: AuthService) {
    super();
  }

  onMenuButtonClick(): void {
      this.menuStateValue = !this.menuStateValue;
      this.menuState.emit(this.menuStateValue);
  }

  ngOnInit(): void {
    this.title = 'APP_NAME';
    this.currentLanguage$ = this.store.pipe(select(getWorkingLanguage));
    this.availableLanguages = this.config.getSettings('i18n.availableLanguages');
    this.isAuthenticated = this.auth.isAuthenticated;
  }

  logout(): void {
    this.auth.invalidate();
  }
}
