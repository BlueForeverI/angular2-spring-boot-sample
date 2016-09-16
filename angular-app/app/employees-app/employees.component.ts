import { Component } from '@angular/core';

import { EmployeesServiceInterface } from './employees-interface.service';
import { EmployeesHttpService } from './employees-http.service';

@Component({
    moduleId: module.id,
    selector: 'employees',
    templateUrl: './employees.template.html',
    styleUrls: ['./employees.style.css'],
    providers: [
        { provide: EmployeesServiceInterface, useClass: EmployeesHttpService }
    ]
})
export class EmployeesComponent { }