import {Injectable} from 'angular2/core';

@Injectable()
export class PaymentService {
    getPayments() {
        return [{
            id: 1,
        }, {
            id: 2
        }]
    }
}