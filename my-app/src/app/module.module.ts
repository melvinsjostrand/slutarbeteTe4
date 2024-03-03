import  {HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { PostService } from './service/postblog.service';
import { BlogService } from './service/blog.service';

import { BlogComponent } from './components/blog/blog.component';
import { BlogpostComponent } from './components/blogpost/blogpost.component';
import { CreateaccComponent } from './components/createacc/createacc.component';
import { CreateblogComponent } from './components/createblog/createblog.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductComponent } from './components/product/product.component';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    IndexComponent,
    BlogComponent,
    CreateblogComponent,
  ],

  imports: [
    RouterOutlet,
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-top-right",
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
  ],
  providers: [
  PostService,
  BlogService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
