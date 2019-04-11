import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
branch={
    "toggleList":true
  }
  medical={
    "toggleList":true
  }
  agent={
    "toggleList":true
  }
  applicant={
    "toggleList":true
  }
  report={
    "toggleList":true
  }
  job={
    "toggleList":true
  }
  tesda={
    "toggleList":true
  }

  constructor() { }

  ngOnInit() {
  }

}
