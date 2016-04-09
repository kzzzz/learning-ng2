import {Component, OnInit} from 'angular2/core';
import {PaymentService} from './payment.service';

@Component({
    selector: 'payments',
    templateUrl: './dev/payments/payments.template.html',
    directives: [],
    providers: [PaymentService]
})
export class PaymentsComponent implements OnInit {
    payments:any[];
    currentPayment:any;
    currentPurchases:any[];
    currentInvoices:any[];

    constructor(private _service:PaymentService) {

    }

    ngOnInit() {
        this._service.getPayments()
            .subscribe(payments => this.payments = payments);
    }

    select(payment) {
        this.currentPayment = payment;
    }

    displayPurchases(payment) {
        this.currentInvoices = [];
    }

    displayInvoices(payment) {
        this.currentPurchases = [];
    }

    toggelAutoPayment(payment) {
        payment.isAutoPayment = !payment.isAutoPayment;
    }
}