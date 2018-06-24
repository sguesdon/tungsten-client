// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

// framework
import { SharedModule } from '~/app/framework/core/shared.module';
import { MaterialModule } from '~/app/framework/material/material.module';

// routes & components
import { routes } from './settings.routes';

import { SettingsComponent } from './settings.component';
import { ProfileComponent } from './+profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // TODO: ngx-i18n-router
    // I18NRouterModule.forChild(routes, 'about')
    MaterialModule,
    SharedModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
  ],
  declarations: [
      SettingsComponent,
      ProfileComponent,
  ]
})
export class SettingsModule {
}
