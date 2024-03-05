import { Routes } from '@angular/router';


//import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogpostComponent } from './components/blogpost/blogpost.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CreateaccComponent } from './components/createacc/createacc.component';
import { CreateblogComponent } from './components/createblog/createblog.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { DeleteuserComponent } from './components/deleteuser/deleteuser.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { RemoveblogComponent } from './components/removeblog/removeblog.component';
import { RemoveproductComponent } from './components/removeproduct/removeproduct.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { UploadproductComponent } from './components/uploadproduct/uploadproduct.component';
import { UserpanelComponent } from './components/userpanel/userpanel.component';

const routeConfig: Routes = [
  { path: 'blogpost/:id', component: BlogpostComponent },
  { path: '', component: IndexComponent, title: 'Startsida'},
  { path: 'product', component: ProductComponent, title: 'product'},
  { path: 'blog', component: BlogComponent, title: 'blog'},
  { path :'blog/createblog', component: CreateblogComponent, title: 'Create blog post'},
  { path :'login', component:LoginComponent, title:'login'},
  { path :'userpanel', component:UserpanelComponent, title: 'User panel'},
  //{ path:'adminpanel', component:AdminpanelComponent, title: 'Admin panel'},
  { path:'product/checkout', component:CheckoutComponent, title: 'checkout'},
  ];
  export default routeConfig;