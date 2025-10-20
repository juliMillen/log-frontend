import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router) {}

  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['julimillen@gmail.com', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
      
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  login(){
    if(this.loginForm.valid){
      console.log("Llamar al servicio de login");
      this.router.navigateByUrl('/inicio');
      this.loginForm.reset();
    }else{
      this.loginForm.markAllAsTouched();
      alert("Error");
    }
  }
}
