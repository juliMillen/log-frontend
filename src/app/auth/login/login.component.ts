import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/LoginRequest';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router, private loginService:LoginService) {}

  
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
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          console.info("Login completo");
        }
      });
      this.router.navigateByUrl('/inicio');
      this.loginForm.reset();
    }else{
      this.loginForm.markAllAsTouched();
      alert("Error");
    }
  }
}
