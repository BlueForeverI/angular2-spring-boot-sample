import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TemplatesComponent } from './tutorial/templates/templates.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: 'main', component: TutorialComponent, pathMatch: "prefix",
    children: [
      { path: 'templates', component: TemplatesComponent },
      { path: '', redirectTo: 'templates', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);