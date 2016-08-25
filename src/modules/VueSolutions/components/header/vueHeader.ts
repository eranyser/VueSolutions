import {Component, Input} from "@angular/core"

@Component({
    selector: "vue-header",
    templateUrl: "src/modules/VueSolutions/components/header/vueHeader.html",
    styleUrls: ["src/modules/VueSolutions/components/header/vueHeader.css"]
})
export class VueHeader {
    @Input()
    headerTitle: string = "";
}