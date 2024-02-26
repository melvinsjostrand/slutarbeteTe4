import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';




import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterModule,
    NavComponent],
  template: `
  <app-nav> </app-nav>
  <section class="content">
  <router-outlet></router-outlet>
</section>
`,
  styleUrl: '../styles.scss'
})

export class AppComponent {
  title = 'my-app';
}
