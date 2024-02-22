import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // your components, directives, pipes
  ],
  imports: [
    // other modules
    HttpClientModule // Import HttpClientModule here
  ],
  providers: [],
  bootstrap: [AppComponent] // Assuming AppComponent is your root component
})
export class AppModule { }
