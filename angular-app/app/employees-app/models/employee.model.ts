import { Department } from './department.model';

export class Employee{
    constructor(
        public id: number, 
        public name: string,
        public salary: number,
        public department?: Department){

    }
}