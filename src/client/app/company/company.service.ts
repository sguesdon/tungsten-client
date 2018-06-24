import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from '~/app/framework/http/http.module';

export interface Company {
    names: {
        firstName : string ,
        secondName : string ,
        thirdName : string ,
    },
}

@Injectable()
export class CompanyService extends AbstractService<Company> {

    constructor(public $http : HttpClient) {
        super($http);
    }

    public getEntityPath() : string {
        return '/socity';
    }
}
