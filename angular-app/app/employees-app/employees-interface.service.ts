import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Employee } from './models/employee.model';

@Injectable()
export abstract class EmployeesServiceInterface {
    getAllEmployees(): Observable<Employee[]> {
        return null;
    }
}
