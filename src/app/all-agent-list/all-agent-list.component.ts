import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-agent-list',
  templateUrl: './all-agent-list.component.html',
  styleUrls: ['./all-agent-list.component.css']
})
export class AllAgentListComponent implements OnInit {
  agentDetail()
  {
    console.log("Update");
    this.router.navigate(['./home/allAgents/update']);
  }

  constructor(private router:Router) {
    
   }


  ngOnInit() {
  }

}
