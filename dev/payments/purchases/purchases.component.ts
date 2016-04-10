import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'purchases',
    template: `<div class="panel panel-default">
<div class="panel-heading">
<h3>Purchases</h3>
</div>
<div class="panel-body">
This is purchase body
</div>
</div>`,
    directives: [],
    providers: []
})
export class PurchasesComponent implements OnInit{

    constructor(private _routeParams: RouteParams){

    }

    ngOnInit()  {
        let id = this._routeParams.get('id');
        console.log(id);
    }
}