import { Component } from '@angular/core';

import { BaseComponent } from '~/app/framework/core/core.module';

import { routeAnimation } from '~/app/app.animations';
import { CompanyService, Company } from '../company.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: [
      'list.component.scss'
  ],
  animations: [routeAnimation]
})
export class ListComponent extends BaseComponent {
    compagnies: Array<Company> = [];
    constructor(companyService: CompanyService) {
        super();
        companyService.getList().then((compagnies : Array<Company>) => this.compagnies = compagnies);
    }
}
