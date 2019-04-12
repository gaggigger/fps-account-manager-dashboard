import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

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
    $(document).ready(function()
    {
      var root=document.documentElement;
      $(".btn-fps.green").on("click",function()
      {
        console.log("Green color");
       root.style.setProperty('--blue','#4CAF50');//default color
       root.style.setProperty('--dark-blue','#1B5E20');//dark blue
      })
      $(".btn-fps.yellow").on("click",function()
      {
        console.log("Yellow");
        root.style.setProperty('--blue','#FFC107');//default color
        root.style.setProperty('--dark-blue','#F57F17'); //dark color
      })
    })
  }

}
