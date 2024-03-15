import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Router } from "@angular/router";
import { error } from "console";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private baseUrl = "https://missanszooochwebbshopapi20240315095708.azurewebsites.net";
  private userRole: any = "";
  constructor(
    private router: Router,
    private http:HttpClient
  ) {}

  async login(mail: string, password: string): Promise<void> {
    try {
      const url = `${this.baseUrl}User/Login`;
      const credentials = btoa(`${mail}:${password}`);
      const options = {
        method: "GET",
        headers: {
          Authorization: "Basic " + credentials,
        },
      };

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Failed to perform request: " + response.statusText);
      }

      const token = await response.text();
      console.log(token);
      localStorage.setItem("auth", token);

      // Call verify method after successful login
      await this.verify();
      this.router.navigate(["/"]).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure
    }
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}user`, user);
  }

  async verify(): Promise<void> {
    try {
      console.log("Verifying user role...");
      const response = await fetch(`${this.baseUrl}User/Verify`, {
        headers: {
          Authorization: localStorage.getItem("auth") || "",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to perform request: " + response.statusText);
      }

      const role = await response.text();
      console.log(role);

      if (role === "2") {
        console.log("Du är inloggad som admin");
        this.userRole = "admin";
      } else if (role === "1") {
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
  
  logout(): Observable<any> {
    const authToken = localStorage.getItem("auth"); 
    console.log(authToken);
    const headers = new HttpHeaders().set('Authorization', `${authToken}`);
    localStorage.removeItem('auth');
    window.location.reload();
    this.userRole = undefined;
    return this.http.post<any>(`${this.baseUrl}user/logout`, {}, { headers }).pipe(
      catchError(error => {
        console.error('Logout failed:', error);
        return throwError(error);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("auth");
  }

  setUserRole(role: any): void {
    this.userRole = role;
  }

  getUserRole(): any {
    return this.userRole;
  }
}
