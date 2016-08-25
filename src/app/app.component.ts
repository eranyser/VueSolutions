import {Component, OnInit} from "@angular/core";
import {VueHeader} from "./components/header/vueHeader"

@Component({
    selector: "vue-main",
    templateUrl: "src/app/app.component.html",
    styleUrls: ["src/app/app.component.css"],
    directives: [VueHeader],
})
export class AppComponent implements OnInit{
    appTitle: string = "Vue Solutions"
    ngOnInit(){
        console.log('hi');
        //debugger;
    }

}