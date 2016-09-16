import { Injectable } from '@angular/core';
import { Car } from '../../models/car.model';

@Injectable()
export abstract class ServiceInterface {
    getMessage(): string { return ""; }
    getData(): Car[] { return []; }
}