import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {FormBuilder, ControlGroup} from 'angular2/common';

import {Payment} from './Payment';
import {PaymentService} from './payment.service';

@Component({
    selector: 'payment',
    templateUrl: './dev/payments/payment-form.template.html',
    directives: [],
    providers: [PaymentService]
})
export class PaymentFormComponent {

    form:ControlGroup;
    payment = new Payment();

    constructor(private _router:Router,
                private _formBuilder:FormBuilder,
                private _service:PaymentService) {

        this.init();
    }

    private init() {
        this.form = this._formBuilder.group({
            id: [''],
            type: [''],
            accountNumber: [''],
            billingName: ['']
        })
    }

    save() {
        this._service.addPayment(this.payment)
            .subscribe(x => {
                console.log(x);
                this._router.navigate(['Payments']);
            });
    }
}