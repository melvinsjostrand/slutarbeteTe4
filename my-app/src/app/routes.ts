import { Routes } from '@angular/router';


import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogpostComponent } from './components/blogpost/blogpost.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CreateaccComponent } from './components/createacc/createacc.component';
import { CreateblogComponent } from './components/createblog/createblog.component';
import { DeleteuserComponent } from './components/deleteuser/deleteuser.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { RemoveblogComponent } from './components/removeblog/removeblog.component';
import { RemoveproductComponent } from './components/removeproduct/removeproduct.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { UploadproductComponent } from './components/uploadproduct/uploadproduct.component';
import { UserpanelComponent } from './components/userpanel/userpanel.component';
import { ResetComponent } from './components/reset/reset.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
const routeConfig: Routes = [
  { path: 'blogpost/:id', component: BlogpostComponent },
  { path: '', component: IndexComponent, title: 'Startsida'},
  { path: 'product', component: ProductComponent, title: 'product'},
  { path: 'blog', component: BlogComponent, title: 'blog'},
  { path :'blog/createblog', component: CreateblogComponent, title: 'Create blog post'},
  { path :'login', component:LoginComponent, title:'login'},
  { path :'userpanel', component:UserpanelComponent, title: 'User panel'},
  { path:'adminpanel', component:AdminpanelComponent, title: 'Admin panel'},
  { path:'product/checkout', component:CheckoutComponent, title: 'checkout'},
  { path: 'createacc', component: CreateaccComponent, title: 'Create Account'},
  { path: 'deleteuser', component: DeleteuserComponent, title: 'Delete User'},
  { path: 'removeblog', component: RemoveblogComponent, title: 'Remove Blog'},
  { path: 'removeproduct', component: RemoveproductComponent, title: 'Remove Product'},
  { path: 'adminpanel/updateproduct', component: UpdateproductComponent, title: 'Update Product'},
  { path: 'adminpanel/uploadproduct', component: UploadproductComponent, title: 'Upload Product'},
  { path: 'userpanel/resetpassword', component:ResetComponent, title:'reset password'},
  {path: 'login/createacc', component:CreateaccComponent, title: 'Sign up'},
  {path:'forgotPassword', component:ForgotPasswordComponent, title: 'Forgot Password'}
  ];
  export default routeConfig;