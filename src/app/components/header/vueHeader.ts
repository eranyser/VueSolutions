import {Component, Input} from "@angular/core"

@Component({
    selector: "vue-header",
    templateUrl: "src/app/components/header/vueHeader.html",
    styleUrls: ["src/app/components/header/vueHeader.css"]
})
export class VueHeader {
    @Input()
    headerTitle: string = "";
}