import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRouting, appRoutingProviders } from './app.routing';
import { MainComponent }  from './modules/main/main.component';

@NgModule({
    imports: [BrowserModule, appRouting],
    declarations: [MainComponent],
    bootstrap: [MainComponent],
    providers: [appRoutingProviders]
})
export class AppModule { }
