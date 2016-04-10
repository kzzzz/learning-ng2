import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

@Component({
    selector: 'invoices',
    template: `<div class="panel panel-default">
<div class="panel-heading">
<h3>Invoices</h3></div>
<div class="panel-body">
This is invoice body
</div>
</div>`,
    directives: [],
    providers: []
})
export class InvoicesComponent implements OnInit {
    invoices:any[];

    constructor(private _router:Router,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let id = this._routeParams.get('id');

        console.log('payment ID', id);
    }
}