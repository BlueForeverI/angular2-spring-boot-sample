import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TemplatesComponent } from './tutorial/templates/templates.component';
import { DataBindingComponent } from './tutorial/data-binding/data-binding.component';
import { FormsAndInputsComponent } from './tutorial/forms-and-inputs/forms-and-inputs.component';
import { DependencyInjectionComponent } from './tutorial/dependency-injection/dependency-injection.component';
import { EmployeesComponent } from './employees-app/employees.component';
import { EmployeesListComponent } from './employees-app/list/employees-list.component';
import {EmployeesAddComponent} from './employees-app/add/employees-add.component';
import {EmployeesViewComponent} from './employees-app/view/employees-view.component';
import { appRouting } from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, appRouting],
    declarations: [AppComponent, TutorialComponent,
        TemplatesComponent, DataBindingComponent, FormsAndInputsComponent, DependencyInjectionComponent,
        EmployeesComponent, EmployeesListComponent, EmployeesAddComponent, EmployeesViewComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }