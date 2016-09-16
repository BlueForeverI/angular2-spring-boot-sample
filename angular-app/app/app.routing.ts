import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TemplatesComponent } from './tutorial/templates/templates.component';
import { DataBindingComponent } from './tutorial/data-binding/data-binding.component';
import { FormsAndInputsComponent } from './tutorial/forms-and-inputs/forms-and-inputs.component';
import { DependencyInjectionComponent } from './tutorial/dependency-injection/dependency-injection.component';
import { EmployeesComponent } from './employees-app/employees.component';
import { EmployeesListComponent } from './employees-app/list/employees-list.component';
import {EmployeesAddComponent} from './employees-app/add/employees-add.component';
import {EmployeesViewComponent} from './employees-app/view/employees-view.component';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: 'tutorial', component: TutorialComponent,
    children: [
      { path: 'templates', component: TemplatesComponent },
      { path: 'data-binding', component: DataBindingComponent },
      { path: 'forms-inputs', component: FormsAndInputsComponent },
      { path: 'dependency-injection', component: DependencyInjectionComponent },
      { path: '', redirectTo: 'templates', pathMatch: 'full' }
    ]
  },
  {
    path: 'employees', component: EmployeesComponent,
    children: [
      { path: 'list', component: EmployeesListComponent },
      { path: 'add', component: EmployeesAddComponent },
      { path: 'view/:id', component: EmployeesViewComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'tutorial', pathMatch: 'full' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);