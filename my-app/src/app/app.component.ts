import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';



import {NavComponent } from "./components/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterModule,
    NavComponent],
  template: `
  <body>
  <div class=wrapper>
  <app-nav></app-nav>
  <div>
  <router-outlet></router-outlet>
  </div>
</div>
</body>
`,
  styleUrl: '../styles.scss'
})

export class AppComponent {
  title = 'my-app';
}

@NgModule({
  declarations: [
    // your components, directives, pipes
  ],
  imports: [
    // other modules
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }