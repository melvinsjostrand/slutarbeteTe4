import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,],
  template:`
  <header>
  <div>
  <h1>skapa blogg - Webbshop</h1>
  <div>
  <nav>
      <ul>
          <li>
              <a [routerLink]="[' ']">startsida</a>
          </li>
          <li>
              <a [routerLink]="['blog']">blogg</a>
          </li>
          <li>
              <a [routerLink]="['product']">product</a>
          </li>
      </ul>
  </nav>
</div>
</div>
</header>
`,
})
export class NavComponent {

}
