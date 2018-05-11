// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
// libs

// framework
import { SharedModule } from '~/app/framework/core/shared.module';
import { MaterialModule } from '~/app/framework/material/material.module';

// routes & components
import { routes } from './customer.routes';
import { CustomerComponent } from './+home/customer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule,
    MatChipsModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatTabsModule
  ],
  entryComponents: [],
  declarations: [CustomerComponent]
})
export class CustomerModule {
}
