import { Component, OnInit, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,],
templateUrl: "./nav.component.html",
styleUrls: ['../../../styles.scss']
})
export class NavComponent {
    isAuthenticated: boolean = false
    userRole: string | undefined;
    constructor(private authService: AuthService) { }
  
    ngOnInit(): void {
        this.isAuthenticated = this.authService.isAuthenticated();
        this.setUserRole();
      }

    isLoggedIn(): boolean {
        return this.authService.isAuthenticated();
    }

    async setUserRole(): Promise<void> {
        if (this.isAuthenticated) {
          try {
            await this.authService.verify();
            this.userRole = this.authService.getUserRole();
            console.log('User role:', this.userRole);
          } catch (error) {
            console.error('Failed to verify user role:', error);
          }
        }
      }


    logout(): void {
      this.authService.logout().subscribe(
        () => {

        },
        (error: any) => {
          console.error('Logout failed:', error);

        }
      );
    }
}
