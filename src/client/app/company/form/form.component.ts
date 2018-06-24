// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import {FormsModule} from '@angular/forms'
// framework
import { BaseComponent } from '~/app/framework/core/core.module';
// app
import { routeAnimation } from '~/app/app.animations';
import { CompanyService, Company } from '../company.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: [
      'form.component.scss'
  ],
  animations: [ routeAnimation ],
  imports: [ FormsModule ]
})
export class FormComponent implements OnInit {

    company: Company = {
        names: {
            firstName: '',
            secondName: '',
            thirdName: ''
        }
    };

    constructor(
        private route: ActivatedRoute,
        private router : Router,
        private companyService: CompanyService,
        private location: Location
    ) {
    }

    ngOnInit() {
        let params = this.route.snapshot.paramMap;
        if(params.has('id')) {
            this.companyService.get(params.get('id'))
            .then((company) => {
                this.company = company;
            })
            .catch((err) => {
                throw err;
            });
        }
    }

    save() {

        let prom;
        if(this.company._id) {
            prom = this.companyService.save(this.company);
        } else {
            prom = this.companyService.create(this.company);
        }
        prom
        .then(() => {
            if(this.router.navigationId == 1) {
                this.router.navigate(['../'], { relativeTo: this.route })
            } else {
                this.location.back();
            }
        })
        .catch((err) => {
            throw err;
        })
    }
}
