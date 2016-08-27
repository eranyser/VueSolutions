import { Routes, RouterModule } from '@angular/router';
import {Route1Test} from "./components/route1Test/route1Component";
import {Route2Test} from "./components/route2Test/route2Component";
import {Route3Test} from "./components/route3Test/route3Component";
import {Route4Test} from "./components/route4Test/route4Component";
const appRoutes: Routes = [
  { 
    path: 'route1', 
    component: Route1Test
  },
  {
    path: 'route2',
    component: Route2Test,
    data: {
      title: 'Heroes List'
    }
  },
  { 
    path: 'route3/:id', 
    component: Route3Test 
  },
  { 
    path: '**', 
    component: Route4Test 
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);