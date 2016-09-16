import { Component } from '@angular/core';
import { Car } from '../../models/car.model';

import { ServiceOne } from './service-one.service';
import { ServiceTwo } from './service-two.service';
import { ServiceInterface } from './service-interface.service';

@Component({
    moduleId: module.id,
    selector: 'dependency-injection',
    templateUrl: './dependency-injection.template.html',
    providers: [{ provide: ServiceInterface, useClass: ServiceOne }]
})
export class DependencyInjectionComponent {
    private message: string = "Will be overriden";
    private data: Car[];

    constructor(service: ServiceInterface){
        this.message = service.getMessage();
        this.data = service.getData();
    }
}