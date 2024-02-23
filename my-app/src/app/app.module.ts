import  {HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { RoutePaths } from './routes';
import { PostService } from './service/postblog.service';


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
    RoutePaths,
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
      }
    }),
  ],
  providers: [provide:HTTP_INTERCEPTORS],
  bootstrap: [AppComponent] 
})
export class AppModule { }
