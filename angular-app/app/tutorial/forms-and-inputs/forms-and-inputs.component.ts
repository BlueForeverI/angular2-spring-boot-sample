import { Component } from '@angular/core';
import { Car } from '../../models/car.model';

@Component({
    moduleId: module.id,
    selector: 'forms-and-inputs',
    templateUrl: './forms-and-inputs.template.html',
    styleUrls: ['./forms-and-inputs.style.css']
})
export class FormsAndInputsComponent {
    private simpleCar: Car = new Car();
    private addedCars: Car[] = [];

    addSimpleCar(): void {
        this.addedCars.push(this.simpleCar);
        this.simpleCar = new Car();
    }
}