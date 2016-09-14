import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent }  from './modules/main/main.component';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent,  },
  { path: '', redirectTo: 'main', pathMatch: "full" }
];

export const appRoutingProviders: any[] = [
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);