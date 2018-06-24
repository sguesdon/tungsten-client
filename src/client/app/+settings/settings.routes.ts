// angular
import { Routes } from '@angular/router';
// app
import { SettingsComponent } from './settings.component';
import { ProfileComponent } from './+profile/profile.component';

export const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,
        data: {
            meta: {
                title: 'PUBLIC.HOME.PAGE_TITLE',
                override: true,
                description: 'PUBLIC.HOME.META_DESCRIPTION'
            }
        },
        children: [
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

        ]
    }
];
