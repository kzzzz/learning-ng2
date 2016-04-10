import {Component, Input} from 'angular2/core';

@Component({
    selector: 'payment-details',
    templateUrl: './dev/payments/details/payments-details.template.html',
    directives: [],
    providers: []
})
export class PaymentDetailsComponent {
    @Input() payment;
}