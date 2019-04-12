import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-agent-detail',
  templateUrl: './view-agent-detail.component.html',
  styleUrls: ['./view-agent-detail.component.css']
})
export class ViewAgentDetailComponent implements OnInit {
  editStatus:string='disabled';
  changeEditStatus()
  {
    this.editStatus=null;
  }

  constructor() { }

  ngOnInit() {
  }

}
