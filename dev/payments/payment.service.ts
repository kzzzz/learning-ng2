import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

import {Payment} from './Payment';

@Injectable()
export class PaymentService {
    private _url= 'http://localhost:5050/payments';
    private _jsonHeader: Headers;

    constructor(private _http: Http){
        this._jsonHeader = new Headers();
        this._jsonHeader.append('Content-Type', 'application/json');
    }
    
    getPayments() {
        return this._http
            .get(this._url)
            .map(res=> res.json());
    }

    getPayment(id){
        let url = `${this._url}/${id}`;

        return this._http
            .get(url)
            .map(res => res.json());
    }

    addPayment(payment:Payment) {
        return this._http
            .post(this._url, JSON.stringify(payment), {headers: this._jsonHeader})
            .map(res => res.json());
    }

    removePayment(id){
        let url = `${this._url}/${id}`;
        
        return this._http
            .delete(url)
            .map(res => res.json());
    }
}