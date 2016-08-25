import "core-js";
import "reflect-metadata";
import "zone.js/dist/zone";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { VueSolutionModule }      from './modules/VueSolutions/vueSolutionsModule';

platformBrowserDynamic().bootstrapModule(VueSolutionModule);


