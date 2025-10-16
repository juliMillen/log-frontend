import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav',
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{

  userLoginOn:boolean=false;
  constructor() {}

  ngOnInit(): void {
      
  }

}
