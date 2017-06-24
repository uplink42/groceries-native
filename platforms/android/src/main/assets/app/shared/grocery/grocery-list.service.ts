import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';

import { Config } from "../config";
import { Grocery } from "./grocery";

import { LoadingService } from "./../loading";
import { IRequest } from "./../IRequest";

@Injectable()
export class GroceryListService {
    constructor(private http: Http, private loading: LoadingService) {}

    doRequest (request: IRequest) {
        let headers = new Headers();
        headers.append("Authorization", "Bearer " + Config.token);

        switch (request.method) {
            case 'get':
                return this.http.get(Config.apiUrl + request.path, { headers: headers })
                .toPromise()
                .then(response => {
                    let groceryList = [];
                    response.json().Result.forEach((grocery) => {
                        groceryList.push(new Grocery(grocery.Id, grocery.Name));
                    });
                    console.dir(response.json());
                    return groceryList;
                })
                .catch(this.handleErrors);

            case 'post':
                headers.append("Content-Type", "application/json");

                return this.http.post(Config.apiUrl + request.path, JSON.stringify({ Name: request.params.Name }), { headers: headers })    
                .toPromise()
                .then(response => {
                    console.dir(response.json());
                    return new Grocery(response.json().Result.Id, request.params.Name);
                })
                .catch(this.handleErrors);

            case 'delete':
                headers.append("Content-Type", "application/json");

                return this.http.delete(Config.apiUrl + request.path + "/" + request.params.Id, { headers: headers })
                .toPromise()
                .then(response => {
                    console.dir(response.json())
                    return response.json();
                })
                .catch(this.handleErrors);
        }
    }

    load() : Promise<any> {
        let request = {
            method: 'get',
            path: 'Groceries'
        }

        return this.doRequest(request);
    }

    add(name: string) : Promise<any> {
        let request = {
            method: 'post',
            path: 'Groceries',
            params: { Name: name },
        }
        console.dir(request);
        return this.doRequest(request);
    }

    delete(id: string) : Promise<any> {
        let request = {
            method: 'delete',
            path: 'Groceries',
            params: { Id: id },
        }

        return this.doRequest(request);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}