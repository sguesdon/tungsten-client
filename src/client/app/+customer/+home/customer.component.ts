// angular
import { Component, Tag } from '@angular/core';
// framework
import { BaseComponent } from '~/app/framework/core/core.module';
// app
import { Customer } from '../models/customer';


@Component({
  templateUrl: './customer.component.html',
  styleUrls: [ './customer.component.scss' ],
  animations: []
})
export class CustomerComponent extends BaseComponent {
    customers: Array<Customer> = [];
    tags: Array<Tag> = [];
    constructor() {
        super();
        this.tags = [
            {
                name: 'Prospect',
                color:''
            },
            {
                name: 'Abandonniste',
                color: ''
            },
            {
                name: 'Perdu',
                color: ''
            }
        ];
        this.customers = [
            {
                denomination: 'LEJEAU Motoculture',
                raisonSociale: 'SARL LEJEAU',
                tags: [
                    {
                        name: 'Prospect',
                        color: ''
                    }
                ]
            },
            {
                denomination: 'NR-COMMUNICATION',
                raisonSociale: 'NR-COMMUNICATION',
                tags: [
                    {
                        name: 'Prospect',
                        color: ''
                    },
                    {
                        name: 'A rapeller',
                        color: ''
                    }
                ]
            },
            {
                denomination: 'TOTAL ACCESS TOURS NORD',
                raisonSociale: 'SARL DUPONT'
            }
        ]
    }
}
