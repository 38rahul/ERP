import { Component, OnInit } from '@angular/core';
import { About} from '../../about';
import { information } from  '../../mock-data';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
 Document=information;
  constructor() { }

  ngOnInit() {
  }

}
