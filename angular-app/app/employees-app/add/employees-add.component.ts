import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Employee } from '../models/employee.model';
import { Department } from '../models/department.model';
import { EmployeesServiceInterface } from '../employees-interface.service';

@Component({
    moduleId: module.id,
    selector: 'employees-add',
    templateUrl: './employees-add.template.html',
    styleUrls: ['./employees-add.style.css']
})
export class EmployeesAddComponent {

    private departments: Department[];
    private employeeToAdd: Employee = new Employee(null, null, null);

    constructor(
        private service: EmployeesServiceInterface, 
        private router: Router,
        private route: ActivatedRoute) {
        service.getAllDepartments().subscribe(departments => {
            this.departments = departments;
        });
    }

    addEmployee(): void {
        this.service.addEmployee(this.employeeToAdd).subscribe(employee => {
            this.router.navigate(['../list'], { relativeTo: this.route });
        });

    }
}