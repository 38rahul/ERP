import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  title = 'project';
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


}
