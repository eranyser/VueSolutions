import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './components/main/main.component';
import { routing,
         appRoutingProviders } from './routing';

import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {VueHeader} from "./components/header/vueHeader";

// import route components for use in this VueSolutions Module:
import {Route1Test} from "./components/route1Test/route1Component";
import {Route2Test} from "./components/route2Test/route2Component";
import {Route3Test} from "./components/route3Test/route3Component";
import {Route4Test} from "./components/route4Test/route4Component";


@NgModule({
    declarations: [
        AppComponent, 
        VueHeader,
        Route1Test,
        Route2Test,
        Route3Test,
        Route4Test
    ],
     providers: [
        appRoutingProviders
    ],
    imports: [
        BrowserModule,
        //http
        HttpModule,
        // Router
        routing,
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
