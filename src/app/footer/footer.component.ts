import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  email!: string;
  errMsg!: boolean;
  isValidEmail = (): boolean => {
    const emailPattern =
      /^[a-zA-Z][a-zA-Z0-9._%+-]+@[a-zA-Z][a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(this.email);
  };
  onEmailCheck = () => {
    this.errMsg = !this.isValidEmail();
  };
}
