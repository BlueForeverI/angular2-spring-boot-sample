import { Component } from '@angular/core';

import { Employee } from '../models/employee.model';
import { EmployeesServiceInterface } from '../employees-interface.service';

@Component({
    moduleId: module.id,
    selector: 'employees-list',
    templateUrl: './employees-list.template.html',
    styleUrls: ['./employees-list.style.css']
})
export class EmployeesListComponent {

    private employees: Employee[];

    constructor(private service: EmployeesServiceInterface) {
        this.reloadData();
    }

    reloadData(): void {
        this.service.getAllEmployees().subscribe(employees => {
            this.employees = employees;
        });
    }

    deleteEmployee(id: number): void {
        this.service.deleteEmployeeById(id).subscribe(result => {
            this.reloadData();
        });
    }
}