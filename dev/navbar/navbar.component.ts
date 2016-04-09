import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'navbar',
    templateUrl: './dev/navbar/navbar.template.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {
    constructor(private _router: Router){

    }
}