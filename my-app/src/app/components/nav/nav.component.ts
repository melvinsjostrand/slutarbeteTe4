import { Component, OnInit, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,],
  template: `<header>
  <div>
  <h1>skapa blogg - Webbshop</h1>
  <div>
  <nav>
      <ul>
          <li>
              <a [routerLink]="['index']">startsida</a>
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
<div>
</div>
</div>
</header>
`,
styleUrl: './nav.component.scss'
})
export class NavComponent {
}
