import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '~/app/framework/core/shared.module';
import { MaterialModule } from '~/app/framework/material/material.module';

import { CompanyService } from './company.service';

import { routes } from './company.routes';

import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { CompanyComponent } from './company.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        SharedModule,
        MatSelectModule,
        MatListModule,
        MatButtonModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        CompanyService
    ],
    declarations: [
        CompanyComponent,
        ListComponent,
        FormComponent
    ]
})
export class CompanyModule {
}
