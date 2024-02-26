import { Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { IndexComponent } from './components/index/index.component';
import { BlogComponent } from './components/blog/blog.component';
import { CreateblogComponent } from './components/createblog/createblog.component';
import { LoginComponent } from './components/login/login.component';
export const routes: Routes = [
    { path: 'blog/:id', component: BlogComponent },
    { path: '', component: IndexComponent, title: 'Startsida'},
    { path: 'index', component: IndexComponent, title: 'Startsida'},
    { path: 'product', component: ProductComponent, title: 'product'},
    { path: 'blog', component: BlogComponent, title: 'blog'},
    { path :'blog/createblog', component: CreateblogComponent, title: 'Create blog post'},
    { path :'login', component:LoginComponent, title:'login'}
  ];
