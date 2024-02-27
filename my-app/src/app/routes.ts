import { Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { IndexComponent } from './components/index/index.component';
import { BlogComponent } from './components/blog/blog.component';
import { CreateblogComponent } from './components/createblog/createblog.component';
import { BlogpostComponent } from './components/blogpost/blogpost.component';
import { LoginComponent } from './components/login/login.component';

const routeConfig: Routes = [
    { path: 'blogpost/:id', component: BlogpostComponent, title: 'Blog Post' },
    { path: '', component: IndexComponent, title: 'Startsida'},
    { path: 'index', component: IndexComponent, title: 'Startsida'},
    { path: 'product', component: ProductComponent, title: 'product'},
    { path: 'blog', component: BlogComponent, title: 'blog'},
    { path :'blog/createblog', component: CreateblogComponent, title: 'Create blog post'},
    { path :'login', component:LoginComponent, title:'login'}
  ];
  export default routeConfig;