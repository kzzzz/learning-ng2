import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {CompaniesComponent} from './companies/companies.component';
import {PaymentsComponent} from "./payments/payments.component";
import {PaymentFormComponent} from "./payments/payment-form.component";
import {PaymentDetailsComponent} from "./payments/details/payment-details.component";
import {InvoicesComponent} from "./payments/invoices/invoices.component";
import {PurchasesComponent} from './payments/purchases/purchases.component';

@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/Payments', name: 'Payments', component: PaymentsComponent},
    {path: '/payment/new', name: 'AddPayment', component: PaymentFormComponent},
    {path: '/payment/:id', name: 'PaymentsDetails', component: PaymentsComponent},
    {path: '/payment/:id/invoices', name: 'PaymentInvoices', component: InvoicesComponent},
    {path: '/payment/:id/purchases', name: 'PaymentPurchases', component: PurchasesComponent},
    {path: '/companies', name: 'Companies', component: CompaniesComponent}
])
@Component({
    selector: 'app',
    template: `
        <div>
            <site-navbar></site-navbar>
                <div class="container">
                    <router-outlet></router-outlet> 
                </div>
            <site-footer></site-footer>
        </div>`,
    directives: [
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        CompaniesComponent,
        PaymentsComponent,
        PaymentFormComponent,
        PaymentDetailsComponent,
        InvoicesComponent,
        ROUTER_DIRECTIVES
    ]
})

export class AppComponent {

}

