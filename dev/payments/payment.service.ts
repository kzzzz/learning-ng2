import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentService {
    private _url= 'http://localhost:5050/payments';

    constructor(private _http: Http){

    }
    
    getPayments() {
        return this._http.get(this._url)
            .map(res=> res.json());
    }
}