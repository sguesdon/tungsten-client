// angular
import { Component, OnInit } from '@angular/core';
import { Injector, NgModule } from '@angular/core';
// libs
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { ConfigService } from '@ngx-config/core';
import { AuthService } from '@ngx-auth/core';

// framework
import { BaseComponent } from '~/app/framework/core/core.module';
import { getWorkingLanguage, Language } from '~/app/framework/i18n/i18n.module';

import {MatSidenavContent, MatSidenav} from '@angular/material/sidenav';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
      MatSidenavContent,
      MatSidenav
  ]
})

/** @title Sidenav open & close behavior */
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: []
})
export class MenuComponent {
    events: Array<string>= [];
    opened: boolean
}
