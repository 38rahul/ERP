import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {
 day:any=
   ["MON","TUE","WED","THURS","FRI","SAT","SUN"];
 
  constructor() { }

  ngOnInit() {
  }

}
