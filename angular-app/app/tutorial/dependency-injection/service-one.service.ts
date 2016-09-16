import { Injectable } from '@angular/core';
import { Car } from '../../models/car.model';
import { ServiceInterface } from './service-interface.service';

@Injectable()
export class ServiceOne extends ServiceInterface {

    getMessage(): string {
        return "This is service 1";
    }

    getData(): Car[] {
        return [new Car("Mercedes S-klasse", "blue", 2016)];
    }
}