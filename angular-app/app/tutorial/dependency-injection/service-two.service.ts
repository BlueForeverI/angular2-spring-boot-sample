import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';
import { ServiceInterface } from './service-interface.service';

@Injectable()
export class ServiceTwo extends ServiceInterface {

    getMessage(): string {
        return "This is service 2";
    }

    getData(): Car[] {
        return [
            new Car("Ford Fiesta", "red", 2000),
            new Car("Ford Fiesta", "red", 2000),
            new Car("Ford Fiesta", "red", 2000),
            new Car("Ford Fiesta", "red", 2000),
            new Car("Ford Fiesta", "red", 2000)
        ];
    }
}