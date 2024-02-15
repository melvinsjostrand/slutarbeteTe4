import { Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { IndexComponent } from './index/index.component';

const routeConfig: Routes = [
    {
      path: '',
      component: IndexComponent,
      title: 'Startsida'
    },
    {
        path: 'product',
        component: ProductComponent,
        title: 'product'
    }
  ];
  
  export default routeConfig;