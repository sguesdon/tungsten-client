// angular
import { Routes } from '@angular/router';

// components
import { CustomerComponent } from './+home/customer.component';

export const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    data: {
      meta: {
        title: 'PUBLIC.HOME.PAGE_TITLE',
        override: true,
        description: 'PUBLIC.HOME.META_DESCRIPTION'
      }
    }
  }
];
