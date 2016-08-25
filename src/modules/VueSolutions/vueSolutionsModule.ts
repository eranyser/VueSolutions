import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './components/main/main.component';

import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {VueHeader} from "./components/header/vueHeader"

@NgModule({
    declarations: [AppComponent, VueHeader],
    imports: [
        BrowserModule,
        //http
        HttpModule,
        // Router
        RouterModule,//.forRoot(config), 
        // Forms
        FormsModule, 
        /*
        // Material Design
        MdSlideToggleModule, 
        MdButtonModule, 
        MdToolbarModule, 
        MdCardModule, 
        MdInputModule,
        */
    ],

    bootstrap: [AppComponent],
})
export class VueSolutionModule {}
