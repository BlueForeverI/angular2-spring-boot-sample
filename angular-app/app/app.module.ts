import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TemplatesComponent }  from './tutorial/templates/templates.component';
import { DataBindingComponent } from './tutorial/data-binding/data-binding.component';
import { appRouting } from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, appRouting],
    declarations: [AppComponent, TutorialComponent, TemplatesComponent, DataBindingComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }