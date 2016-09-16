import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


import { EmployeesServiceInterface } from './employees-interface.service';
import { Employee } from './models/employee.model';
import { Department } from './models/department.model';
import {Department} from './models/department.model';

@Injectable()
export class EmployeesHttpService extends EmployeesServiceInterface {

    private employees: Employee[] = [
        new Employee(1, "Pesho", 1000, new Department(1, "Software")),
        new Employee(2, "Gosho", 2000),
        new Employee(3, "Tisho", 3000)
    ];

    getAllEmployees(): Observable<Employee[]> {
        return Observable.create((observer: Observer<Employee[]>) => {
            observer.next(this.employees);
            observer.complete();
        });
    }

    addEmployee(employee: Employee): Observable<Employee> {
        return Observable.create((observer: Observer<Employee>) => {
            this.employees.push(employee);
            observer.next(employee);
            observer.complete();
        });
    }

    
    getAllDepartments(): Observable<Department[]> {
        return Observable.create((observer: Observer<Department[]>) => {
            observer.next([
                new Department(1, "Software"),
                new Department(2, "Support"),
                new Department(1, "HR")])
        });
    }

    getEmployeeById(id: number): Observable<Employee> {
        return Observable.create((observer: Observer<Employee>) => {
            observer.next(this.employees[0]);
            observer.complete();
        });
    }
    
    deleteEmployeeById(id: number): Observable<boolean> {
        return Observable.create((observer: Observer<boolean>) => {
            observer.next(true);
            observer.complete();
        });
    }
}

