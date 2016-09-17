import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'templates',
    templateUrl: './templates.template.html',
    styleUrls: ['./templates.style.css']
})
export class TemplatesComponent { 
    private stringField: string = "A simple string field";
    private numbers: number[] = [0, 4, 8, 155, 22];
    private isBold: boolean = false;
    private divSize: number = 200;

    private getMessage():string {
        return "A message";
    }
}
