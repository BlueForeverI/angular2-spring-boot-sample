import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './modules/main/main.component';
import { TemplatesComponent }  from './modules/main/templates/templates.component';
import { appRouting } from './app.routing';

@NgModule({
    imports: [BrowserModule, appRouting],
    declarations: [AppComponent, MainComponent, TemplatesComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }