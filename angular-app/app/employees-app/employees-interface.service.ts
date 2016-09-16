import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Employee } from './models/employee.model';
import {Department} from './models/department.model';

@Injectable()
export abstract class EmployeesServiceInterface {
    getAllEmployees(): Observable<Employee[]> {
        return null;
    }

    addEmployee(employee: Employee): Observable<Employee> {
        return null;
    }

    getAllDepartments(): Observable<Department[]> {
        return null;
    }

    getEmployeeById(id: number): Observable<Employee> {
        return null;
    }

    deleteEmployeeById(id: number): Observable<boolean> {
        return null;
    }
}
