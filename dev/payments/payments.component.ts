import {Component, OnInit} from 'angular2/core';
import {RouterLink, ROUTER_DIRECTIVES} from 'angular2/router';

import {PaymentService} from './payment.service';
import {PaymentDetailsComponent} from './details/payment-details.component';

@Component({
    selector: 'payments',
    templateUrl: './dev/payments/payments.template.html',
    directives: [
        RouterLink,
        ROUTER_DIRECTIVES,
        PaymentDetailsComponent
    ],
    providers: [PaymentService]
})
export class PaymentsComponent implements OnInit {
    payments:any[];
    currentPayment:any;

    constructor(private _service:PaymentService) {

    }

    ngOnInit() {
        this._service.getPayments()
            .subscribe(payments => this.payments = payments);
    }

    select(payment) {
        this._service.getPayment(payment.id)
            .subscribe(
                p => this.currentPayment = p,
                e => console.log(e)
            );
    }

    toggelAutoPayment(payment) {
        // TOdo:
        payment.isAutoPayment = !payment.isAutoPayment;
    }
}