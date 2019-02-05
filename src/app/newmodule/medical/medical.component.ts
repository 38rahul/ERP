import { Component, OnInit } from '@angular/core';
import {Disability} from './disability';
import {DependencyDetails} from './dependency-details';
import {dDetails} from './mock-medical';
import {Injury} from './injury';
@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {
inj:Injury = {name:'Injury',leaves:'5 Approved Leaves',date:'25/03/2014',}
d :Disability={type:'Health Impairments',disablity1:'Blood Sugar',reason:'High Blood Sugar'}
dependency=dDetails;
 dep:DependencyDetails ={title:'Karen',relative:'Spouce',}

  constructor() { }

  ngOnInit() {
  }

}