import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent }  from './modules/main/main.component';
import { TemplatesComponent } from './modules/main/templates/templates.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '', component: AppComponent, pathMatch: 'full', children: [
      {
        path: '', redirectTo: 'main'
      },
      {
        path: 'main', component: MainComponent, pathMatch: "prefix",
        children: [
          { path: 'templates', component: TemplatesComponent, pathMatch: "prefix" }
        ]
      }]
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);