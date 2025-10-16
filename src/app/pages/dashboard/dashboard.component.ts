import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../../shared/nav/nav.component";
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-dashboard',
  imports: [NavComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {


  userLoginOn:boolean=false;

  constructor() {

  }

  ngOnInit(): void {
      
  }
}
