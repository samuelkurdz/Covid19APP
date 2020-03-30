import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  open:Boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu(): void {
    this.open = !this.open;   
  }

}
