import { Component, OnInit,Output,EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-servicerequest',
  templateUrl: './servicerequest.component.html',
  styleUrls: ['./servicerequest.component.css']
})
export class ServicerequestComponent implements OnInit {
  @Output() featureselected = new EventEmitter<string>();
  onselect(feature:string){
    this.featureselected.emit(feature);
  }

  down:string[]=["Request Changes","Request Types","Request Settings","My Request Summary","My Action Summary"];
  loadedfeature='detail';
  loadf='a';
  

  onnavigate(feature:string)
  {
    this.loadedfeature=feature;
  }
  navigation(feature:string)
  {
    this.loadf=feature;
  }
  constructor() { }

  ngOnInit() {
  }

}
