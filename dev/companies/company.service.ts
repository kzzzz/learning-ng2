import {Injectable} from 'angular2/core';

@Injectable()
export class CompanyService {
    getCompany() {
        return [{
            id: 1,
        }, {
            id: 2
        }];
    }
}
