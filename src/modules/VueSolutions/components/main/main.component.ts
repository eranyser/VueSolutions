import {Component, OnInit} from "@angular/core";
//import {VueHeader} from "../header/vueHeader"

@Component({
    selector: "vue-main",
    templateUrl: "src/modules/VueSolutions/components/main/main.component.html",
    styleUrls: ["src/modules/VueSolutions/components/main/main.component.css"],
    //directives: [VueHeader],
})
export class AppComponent implements OnInit{
    appTitle: string = "Vue Solutions"
    ngOnInit(){
        console.log('hi');
        //debugger;
    }

}