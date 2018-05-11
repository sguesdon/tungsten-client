// angular
import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
// framework
import { BaseComponent } from '~/app/framework/core/core.module';
// app
import { Customer, Tag } from '../models/customer';

@Component({
  templateUrl: './customer.component.html',
  styleUrls: [ './customer.component.scss' ],
  animations: []
})
export class CustomerComponent extends BaseComponent {
    customers: Array<Customer> = [];
    filteredCustomers: Array<Customer> = [];
    tags: Array<Tag> = [];
    tagSelection: Array<string> = [];
    constructor() {
        super();
        this.tagSelection = [];
        this.tags = [
            {
                name: 'Prospect',
                color: 'primary',
                selected: false
            },
            {
                name: 'Abandonniste',
                selected: false
            },
            {
                name: 'Perdu',
                selected: false
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
                        name: 'Abandonniste',
                        color: ''
                    }
                ]
            },
            {
                denomination: 'TOTAL ACCESS TOURS NORD',
                raisonSociale: 'SARL DUPONT',
                tags: [
                    {
                        name: 'Prospect',
                        color: ''
                    },
                    {
                        name: 'Abandonniste',
                        color: ''
                    },
                    {
                        name: 'Perdu',
                        color: ''
                    }
                ]
            }
        ];
    }

    onTagSelectionChange() {

    }

    customerFilter(customers) {
        let filterSumTag = this.getFilterSumTag();
        return this.customers.filter((customer) => {
            console.log(filterSumTag, customer.sumTag, customer.sumTag == customer.sumTag & filterSumTag);
            return (customer.sumTag == customer.sumTag & filterSumTag);
        });
    }
}
