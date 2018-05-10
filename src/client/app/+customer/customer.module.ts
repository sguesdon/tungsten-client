// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';

// libs
// TODO: ngx-i18n-router
// import { I18NRouterModule } from '@ngx-i18n-router/core';

// framework
import { SharedModule } from '~/app/framework/core/shared.module';
import { MaterialModule } from '~/app/framework/material/material.module';

// routes & components
import { routes } from './customer.routes';
import { CustomerComponent } from './+home/customer.component';

@NgModule({
  imports: [
    CommonModule,
    // TODO: ngx-i18n-router
    // I18NRouterModule.forChild(routes, 'home')
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule,
    MatChipsModule
  ],
  declarations: [CustomerComponent]
})
export class CustomerModule {
}
