import { Component, OnInit } from '@angular/core';
import { AuthService } from '../my-api.service';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
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
          <li *ngIf="role === 2"><a routerLink="/admin">Admin Panel</a></li>
          <li *ngIf="role === 1"><a routerLink="/user">User Panel</a></li>
      </ul>
  </nav>
</div>
</div>
</header>
`,
  styleUrls: ['../style.scss']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.verifyUser();
  }

  async verifyUser() {
    try {
      const role = await this.authService.verify();
      console.log("Role:", role);
      // Further logic based on role
    } catch (error) {
      console.error("Error verifying user:", error);
    }
  }

  // Other methods and logic
}
