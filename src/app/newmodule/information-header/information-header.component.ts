import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-information-header',
  templateUrl: './information-header.component.html',
  styleUrls: ['./information-header.component.css']
})
export class InformationHeaderComponent implements OnInit {

  @Output() fselected = new EventEmitter<string>();
  onclick(feature:string){
    this.fselected.emit(feature);
  }

  constructor() { }

  ngOnInit() {
  }

}
