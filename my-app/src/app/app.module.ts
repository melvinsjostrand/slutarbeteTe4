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


import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { IndexComponent } from './components/index/index.component';
import { BlogComponent } from './components/blog/blog.component';
import { CreateblogComponent } from './components/createblog/createblog.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    IndexComponent,
    BlogComponent,
    CreateblogComponent
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
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
      }
    }),
  ],
  providers: [
  PostService,
  BlogService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
