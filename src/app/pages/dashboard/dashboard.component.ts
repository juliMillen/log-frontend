import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavComponent } from "../../shared/nav/nav.component";
import { CommonModule } from '@angular/common'
import { LoginService } from '../../services/auth/login.service';
import { User } from '../../services/auth/user';

@Component({
  selector: 'app-dashboard',
  imports: [NavComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy {


  userLoginOn:boolean=false;
  userData?: User;

  constructor(private loginService:LoginService) {

  }
  ngOnDestroy(): void {
    this.loginService.currentUserData.unsubscribe();
  }

  ngOnInit(): void {
      this.loginService.currentUserLoginOn.subscribe({
        next: (userLoginOn) => {
          this.userLoginOn=userLoginOn;
        }
      });

    this.loginService.currentUserData.subscribe({
      next: (userData) => {
        this.userData=userData;
      }
    });
  }
}
