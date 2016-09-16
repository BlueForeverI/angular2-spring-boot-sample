import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


import { EmployeesServiceInterface } from './employees-interface.service';
import { Employee } from './models/employee.model';
import { Department } from './models/department.model';

@Injectable()
export class EmployeesHttpService extends EmployeesServiceInterface {

    private baseUrl: string = "http://localhost:8080/api";
    private EMPLOYEES_URL: string = this.baseUrl + "/employees";
    private DEPARTMENTS_URL: string = this.baseUrl + "/departments";

    constructor(private http: Http) {
        super();

    }

    getAllEmployees(): Observable<Employee[]> {
        return Observable.create((observer: Observer<Employee[]>) => {
            this.http.get(this.EMPLOYEES_URL)
                .subscribe(res => {
                    observer.next(res.json());
                    observer.complete();
                });
        });
    }

    addEmployee(employee: Employee): Observable<Employee> {
        return Observable.create((observer: Observer<Employee>) => {
            this.http.post(this.EMPLOYEES_URL, employee)
                .subscribe(res => {
                    observer.next(res.json());
                    observer.complete();
                });
        });
    }


    getAllDepartments(): Observable<Department[]> {
        return Observable.create((observer: Observer<Department[]>) => {
            this.http.get(this.DEPARTMENTS_URL)
                .subscribe(res => {
                    observer.next(res.json());
                    observer.complete();
                });
        });
    }

    getEmployeeById(id: number): Observable<Employee> {
        return Observable.create((observer: Observer<Employee>) => {
            this.http.get(this.EMPLOYEES_URL + "/" + id)
                .subscribe(res => {
                    observer.next(res.json());
                    observer.complete();
                })
        });
    }

    deleteEmployeeById(id: number): Observable<void> {
        return Observable.create((observer: Observer<void>) => {
            this.http.delete(this.EMPLOYEES_URL + "/" + id)
                .subscribe(res => {
                    observer.next(null);
                    observer.complete();
                })
        });
    }
}

