import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

import {Payment} from './Payment';

@Injectable()
export class PaymentService {
    private _url= 'http://localhost:5050/payments';

    constructor(private _http: Http){

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

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http
            .post(this._url, JSON.stringify(payment), {headers: headers})
            .map(res => res.json());
    }
}