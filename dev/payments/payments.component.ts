import {Component, OnInit} from 'angular2/core';
import {PaymentService} from './payment.service';

@Component({
    selector: 'payments',
    template: `<div>Payments</div>`,
    directives: [],
    providers: [PaymentService]
})
export class PaymentsComponent implements OnInit{
    payments: any[];
    constructor(private _service: PaymentService){

    }

    ngOnInit(){
        this.payments = this._service.getPayments();
    }
}