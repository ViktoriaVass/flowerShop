import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from './user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public users: IUser[] = [];
  public userForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      vorname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      favFlower: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      passwort: ['', [Validators.minLength(5), Validators.maxLength(12), Validators.required, this.passwortValidator]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Formular eingereicht:', this.userForm.value);

      const newUser: IUser = {
        vorname: this.userForm.get('vorname')?.value,
        lastname: this.userForm.get('lastname')?.value,
        favFlower: this.userForm.get('favFlower')?.value,
        email: this.userForm.get('email')?.value,
        passwort: this.userForm.get('passwort')?.value
      };

      this.users.push(newUser);
      this.userForm.reset();

    } else {
      console.log('Formular ungültig. Bitte überprüfen Sie Ihre Eingaben.');
    }
  }

  passwortValidator(passwort: any) {
    const value = passwort.value;
    const hasNumber = /\d/.test(value);
    const hasUpperCase = /[A-Z]/.test(value);
    const valid = hasNumber && hasUpperCase;

    if (!valid) {
      return { passwordRequirements: true };  
    }

    return null;
  }
}