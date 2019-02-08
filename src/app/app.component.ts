import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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