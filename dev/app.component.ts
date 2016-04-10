import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavbarComponent} from './navbar/navbar.component';
import {CompaniesComponent} from './companies/companies.component';
import {PaymentsComponent} from "./payments/payments.component";
import {PaymentDetailsComponent} from "./payments/details/payment-details.component";
import {InvoicesComponent} from "./payments/invoices/invoices.component";
import {PurchasesComponent} from './payments/purchases/purchases.component';

@RouteConfig([
    {path: '/', name: 'Payments', component: PaymentsComponent, useAsDefault: true},
    {path: '/payment/:id', name: 'PaymentsDetails', component: PaymentsComponent},
    {path: '/payment/:id/invoices', name: 'PaymentInvoices', component: InvoicesComponent},
    {path: '/payment/:id/purchases', name: 'PaymentPurchases', component: PurchasesComponent},
    {path: '/companies', name: 'Companies', component: CompaniesComponent}
])
@Component({
    selector: 'app',
    template: `
        <div>
            <navbar></navbar>
            <div class="container">
                <router-outlet></router-outlet> 
            </div>
        </div>`,
    directives: [
        NavbarComponent,
        CompaniesComponent,
        PaymentsComponent,
        PaymentDetailsComponent,
        InvoicesComponent,
        ROUTER_DIRECTIVES
    ]
})

export class AppComponent {

}

