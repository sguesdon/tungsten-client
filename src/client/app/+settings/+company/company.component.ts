// angular
import { Component } from '@angular/core';
// framework
import { BaseComponent } from '~/app/framework/core/core.module';
// app
import { routeAnimation } from '~/app/app.animations';

@Component({
  templateUrl: './company.component.html',
  styleUrls: [],
  animations: [routeAnimation]
})
export class CompanyComponent extends BaseComponent {
    compagnies: Array<any> = [];
    constructor() {
        super();
        this.compagnies = [
            {
                name: 'Google',
                nbCustomer: 500
            },
            {
                name: 'Facebook',
                nbCustomer: 400
            },
            {
                name: 'Amazon',
                nbCustomer: 2600
            }
        ]
    }
}
