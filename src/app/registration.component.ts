import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
  };

  constructor(private apiService: ApiService) {}

  onSubmit() {
    if (this.user.password === this.user.confirm_password) {
      this.apiService.registerUser(this.user).subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );
    } else {
      alert('Passwords do not match');
    }
  }
}
