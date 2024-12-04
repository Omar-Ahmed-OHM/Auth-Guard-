import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-first',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  loginform:FormGroup;
  constructor(private fb:FormBuilder){
    this.loginform=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  login() {
    if (this.loginform.valid) {
      console.log('Form Submitted', this.loginform.value);

      let userType = 'type1';
      if (this.loginform.value.email === 'admin@example.com') {
        userType = 'admin';
      } else if (this.loginform.value.email === 'user2@example.com') {
        userType = 'type2';
      }

      localStorage.setItem('email', this.loginform.value.email);
      localStorage.setItem('userType', userType);

      console.log(`User logged in with role: ${userType}`);
    } else {
      console.log('Form is invalid');
    }
  }

}

