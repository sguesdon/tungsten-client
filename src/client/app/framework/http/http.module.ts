import { HttpClient } from '@angular/common/http';

export class Rest {
    public static API_BASE_PATH : string = 'http://localhost:3000/api';
}

export interface Entity {
    id : number;
}

export class AbstractService<T extends Entity> {

    constructor(public http : HttpClient) {
    }

    public getEntityPath() : string {
        throw  'YOU SHOULD NOT USE THE ABSTRACT SERVICE DIRECTLY';
        //return 'NOT IMPLEMENTED';
    }

    private getUrl() : string {
        return Rest.API_BASE_PATH + this.getEntityPath();
    }

    public get(id : number) : Promise<T> {
        return this.http.get(this.getUrl() + '/' + id).toPromise().then((result: any) => {
            return Promise.resolve(result.data);
        });
    }

    public getList() : Promise<Array<T>> {
        return this.http.get(this.getUrl()).toPromise().then((result: any) => {
            return Promise.resolve(result.data);
        });
    }

    public create(item : T) : Promise<T> {
        return this.http.post(this.getUrl(), item).toPromise().then((result: any) => {
            return Promise.resolve(result.data);
        });
    }

    public save(item : T) : Promise<T> {
        if (!item.id) {
            return this.create(item);
        } else {
            return this.http.put(this.getUrl() + '/' + item.id, item).toPromise().then((result: any) => {
                return Promise.resolve(result.data);
            });
        }
    }

    public delete(item : T) : Promise<boolean> {
        return this.http.delete(this.getUrl() + '/' + item.id).toPromise().then((result: any) => {
            return Promise.resolve(true);
        });;
    }
}
