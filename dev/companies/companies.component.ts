import {Component, OnInit} from 'angular2/core';
import {CompanyService} from "./company.service";

@Component({
    selector: 'companies',
    templateUrl: 'dev/companies/companies.template.html',
    directives: [],
    providers: [CompanyService]
})
export class CompaniesComponent implements OnInit{
      companies: any[];

    constructor(private _service: CompanyService){

    }

    ngOnInit(){
        this.companies = this._service.getCompany();
    }
}