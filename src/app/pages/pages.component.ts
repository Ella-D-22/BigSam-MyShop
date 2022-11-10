import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  isActive:boolean=false;

  onClick(){
    this.isActive = !this.isActive
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
