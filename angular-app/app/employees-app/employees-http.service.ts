import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


import { EmployeesServiceInterface } from './employees-interface.service';
import { Employee } from './models/employee.model';

@Injectable()
export class EmployeesHttpService extends  EmployeesServiceInterface {
    getAllEmployees(): Observable<Employee[]> {
        return Observable.create((observer:Observer<Employee[]>) => {
            observer.next([
                new Employee(1, "Pesho", 1000),
                new Employee(2, "Gosho", 2000),
                new Employee(3, "Tisho", 3000)
            ])
        })
    }
}

