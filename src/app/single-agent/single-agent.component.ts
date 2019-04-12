import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-single-agent',
  templateUrl: './single-agent.component.html',
  styleUrls: ['./single-agent.component.css']
})
export class SingleAgentComponent implements OnInit {
  agentDetail()
  {
    console.log("Update");
    this.router.navigate(['./home/allAgents/update']);
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
