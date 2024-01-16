import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post('http://10.0.1.59:5002/register', user);
  }
}

  confirmEmail(confirmationCode: string) {
     return this.http.post('http://10.0.1.59:5002/confirm_email', { confirmation_code: confirmationCode });
}
