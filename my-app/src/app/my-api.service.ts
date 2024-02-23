import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  async verify() {
    let role: number;
    let roleStr: string;
    let authorizationHeader: string | null = localStorage.getItem("GUID");
    
    // Check if authorizationHeader is null
    if (authorizationHeader !== null) {
      try {
        let userverify = "https://localhost:7063/User/Verify";
        let response = await fetch(userverify, {
          headers: {
            "Authorization": authorizationHeader
          }
        });
        roleStr = await response.text();
        role = parseInt(roleStr);
        console.log(role)
        if (role == 2) {
          console.log("Du är inloggad som admin");
        } else if (role == 1) {
          console.log("Du är inloggad som vanlig användare");
        } else {
          console.log("Du är inte inloggad");
        }
        return role;
      } catch (error) {
        console.error("Error verifying user:", error);
        throw error;
      }
    } else {
      console.error("Authorization token is null");
      // Handle the case where the authorization token is null
      // For example, redirect the user to the login page
    }
  }
  
}
