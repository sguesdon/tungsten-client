// angular
import { Routes } from '@angular/router';

import { CompanyComponent } from './+company/company.component';
import { ProfileComponent } from './+profile/profile.component';

export const routes: Routes = [
  {
    path: 'company',
    component: CompanyComponent,
    data: {
      meta: {
        title: 'PUBLIC.HOME.PAGE_TITLE',
        override: true,
        description: 'PUBLIC.HOME.META_DESCRIPTION'
      }
    }
},
{
  path: 'profile',
  component: ProfileComponent,
  data: {
    meta: {
      title: 'PUBLIC.HOME.PAGE_TITLE',
      override: true,
      description: 'PUBLIC.HOME.META_DESCRIPTION'
    }
  }
}
];
