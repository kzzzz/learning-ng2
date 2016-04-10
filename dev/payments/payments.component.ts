import {Component, OnInit} from 'angular2/core';
import {PaymentService} from './payment.service';
import {PaymentDetailsComponent} from './details/payment-details.component';
import{PurchasesComponent} from './purchases/purchases.component';
import{InvoicesComponent} from './invoices/invoices.component';

@Component({
    selector: 'payments',
    templateUrl: './dev/payments/payments.template.html',
    directives: [
        PaymentDetailsComponent,
        PurchasesComponent,
        InvoicesComponent
    ],
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

        this._service.getPayment(payment.id)
            .subscribe(
                p => this.currentPayment = p,
                e => console.log(e)
            );
    }

    displayPurchases(payment) {
        this.currentInvoices = [];
    }

    displayInvoices(payment) {
        this.currentPurchases = [];
    }

    toggelAutoPayment(payment) {
        // TOdo:
        payment.isAutoPayment = !payment.isAutoPayment;
    }
}