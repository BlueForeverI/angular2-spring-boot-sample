import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Employee } from '../models/employee.model';
import { EmployeesServiceInterface } from '../employees-interface.service';

@Component({
    moduleId: module.id,
    selector: 'employees-view',
    templateUrl: './employees-view.template.html'
})
export class EmployeesViewComponent {

    private employee: Employee;

    constructor(
        service: EmployeesServiceInterface,
        route: ActivatedRoute) {
        let id: number = parseInt(route.params['id']);
        service.getEmployeeById(id)
            .subscribe(employee => {
                this.employee = employee;
            });
    }
}