import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'data-binding',
    templateUrl: './data-binding.template.html', 
    styles: ['td, table { border: 1px solid black; }', 
        'td { min-width: 100px; height: 100px; text-align: center; }']
})
export class DataBindingComponent {
    private oneWayValue: number = 20;
    private twoWayValue: number = 20;

    private colSpan: number = 2;

    incrementOneWayValue(): void {
        this.oneWayValue++;
    }

    incrementTwoWayValue(): void {
        this.twoWayValue++;
    }
}