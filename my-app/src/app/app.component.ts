import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';




import {NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterModule,
    NavComponent],
  template: `
    <div>
  <app-nav></app-nav>
  <div>
  <router-outlet></router-outlet>
  </div>
</div>
`,
  styleUrl: '../styles.scss'
})

export class AppComponent {
  title = 'my-app';
}
