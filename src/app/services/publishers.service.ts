import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { Publisher } from '../models/Publisher';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class PublisherService {
    constructor(private http: Http, private config: AppConfig) { }

    getAll() {
        return this.http.get(this.config.apiUrl +
             '/api/publishers').map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(this.config.apiUrl +
             '/api/publishers/' + id).map((response: Response) => response.json());
    }

    create(publisher: Publisher) {
        return this.http.post(this.config.apiUrl + 
            '/api/publishers', publisher);
    }

    update(publisher: Publisher) {
        return this.http.put(this.config.apiUrl 
            + '/api/publishers/' + publisher.id, publisher);
    }

    //v1 here:
    // delete(id: number)    {
    //     console.log( this.config.apiUrl  + '/api/publishers/' + id );
    //     return this.http.delete(this.config.apiUrl  + '/api/publishers/' + id );

    //    }

    //v2 here

    delete(publisher: Publisher) {
        return this.http.delete(this.config.apiUrl 
            + '/api/publishers/' + publisher.id );  //, publisher);
    }

    // // private helper methods

    // private jwt() {
    //     // create authorization header with jwt token
    //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     if (currentUser && currentUser.token) {
    //         let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
    //         return new RequestOptions({ headers: headers });
    //     }
    // }
}