import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage-service.service';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7063/';
  
  constructor(
    private router: Router,
    private localStorage: LocalStorageService 
    ) {}
  login(mail: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = `${this.baseUrl}User/Login`;
      const credentials = btoa(`${mail}:${password}`);
      const options = {
        method: 'GET',
        headers: {
          'Authorization': "Basic " + credentials
        },
      };

      fetch(url, options)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to perform request: ' + response.statusText);
          }
          let text = response.text();
          return text;
        })
        .then(Token => {
          console.log(Token);
            localStorage.setItem("user", Token);
            return Token; 
        })
        .catch(error => {
          console.error('Login failed:', error);
          throw new Error('Failed to parse response: ' + error.message);
        });
        this.router.navigate(['/']);
    });
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

logout(): void {
  localStorage.removeItem('user'); 
  this.router.navigate(['/']);
}

isAuthenticated(): boolean {
  return !!localStorage.getItem('user');
}
  
}
