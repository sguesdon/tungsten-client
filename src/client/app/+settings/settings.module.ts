// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';

// framework
import { SharedModule } from '~/app/framework/core/shared.module';
import { MaterialModule } from '~/app/framework/material/material.module';
// routes & components
import { routes } from './settings.routes';
import { CompanyComponent } from './+company/company.component';
import { ProfileComponent } from './+profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    // TODO: ngx-i18n-router
    // I18NRouterModule.forChild(routes, 'about')
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule,
    MatSelectModule,
    MatListModule
  ],
  declarations: [
      CompanyComponent,
      ProfileComponent
  ]
})
export class SettingsModule {
}
