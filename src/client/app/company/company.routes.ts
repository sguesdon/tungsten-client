import { Routes } from '@angular/router';

import { CompanyComponent } from './company.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent,
        data: {
            meta: {
                title: 'PUBLIC.HOME.PAGE_TITLE',
                override: true,
                description: 'PUBLIC.HOME.META_DESCRIPTION'
            }
        }
    },
    {
        component: FormComponent,
        path: 'create',
        data: {
            meta: {
                title: 'PUBLIC.HOME.PAGE_TITLE',
                override: true,
                description: 'PUBLIC.HOME.META_DESCRIPTION'
            }
        }
    },
    {
        component: FormComponent,
        path: ':id',
        data: {
            meta: {
                title: 'PUBLIC.HOME.PAGE_TITLE',
                override: true,
                description: 'PUBLIC.HOME.META_DESCRIPTION'
            }
        }
    },
];
