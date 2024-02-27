import { ChangeDetectorRef, Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage-service.service';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7063/';
  private userRole: any = '';
  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    ) {}


    async login(mail: string, password: string): Promise<void> {
      try {
        const url = `${this.baseUrl}User/Login`;
        const credentials = btoa(`${mail}:${password}`);
        const options = {
          method: 'GET',
          headers: {
            'Authorization': "Basic " + credentials
          },
        };
  
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Failed to perform request: ' + response.statusText);
        }
  
        const token = await response.text();
        console.log(token)
        localStorage.setItem("user", token);
  
        // Call verify method after successful login
        await this.verify();
        this.router.navigate(['/']);
        window.location.reload(); 
      } catch (error) {
        console.error('Login failed:', error);
        // Handle login failure
      }
    }


  /*async register(registerModel: registerModel): Promise<SingleResponseModel<TokenModel>> {
    try {
      const response = await fetch(`${this.url}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerModel)
      });

      if (!response.ok) {
        throw new Error('Failed to register: ' + response.statusText);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      } else {
        throw new Error('Failed to register: Invalid response format');
      }
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    }
  }
*/
async verify(): Promise<void> {
  try {
    console.log('Verifying user role...');
    const response = await fetch(`${this.baseUrl}User/Verify`, {
      headers: {
        "Authorization": localStorage.getItem("user") || ''
      }
    });

    if (!response.ok) {
      throw new Error('Failed to perform request: ' + response.statusText);
    }

    const role = await response.text();
    console.log(role);

    if (role === '2') {
      console.log("Du är inloggad som admin");
      this.userRole = "admin";
    } else if (role === '1') {
      console.log("Du är inloggad som vanlig användare");
      this.userRole = "user";
    } else {
      console.log("Du är inte inloggad");
    }
    this.setUserRole(this.userRole);
  } catch (error) {
    console.error("Verification failed:", error);
    return undefined;
  }
}

async logout(): Promise<void> {
  try {
    localStorage.removeItem('user');
    await this.verify();
    this.userRole = undefined;

    window.location.reload(); 
  } catch (error) {
    console.error('Logout failed:', error);
  }
}

isAuthenticated(): boolean {
  return !!localStorage.getItem('user');
}
  

setUserRole(role: any): void {
  this.userRole = role;
}

getUserRole(): any {
  return this.userRole;
}
}
