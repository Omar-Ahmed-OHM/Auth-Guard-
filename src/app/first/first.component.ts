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
  login(){
    if (this.loginform.valid) {
      console.log('Form Submittedss', this.loginform.value);
      localStorage.setItem('email',this.loginform.value.email)
    } else {
      console.log('Form is invalid');
    }
  }
}

