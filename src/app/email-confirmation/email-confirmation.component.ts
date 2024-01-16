import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent {
  confirmationCode: string = '';

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.confirmEmail(this.confirmationCode).subscribe(
      response => console.log('Success!', response),
      error => console.error('Error!', error)
    );
  }
}
