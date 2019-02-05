import { Component, OnInit } from '@angular/core';
import {Training} from './training';
import {TRAIN} from './mock-training-certification';
import {Certification} from './certification';
import {CERT} from './mock-training-certification';

@Component({
  selector: 'app-training-certification',
  templateUrl: './training-certification.component.html',
  styleUrls: ['./training-certification.component.css']
})
export class TrainingCertificationComponent implements OnInit {
  train=TRAIN;
training :Training ={title:'Attitudinal & Behaviourial Training',name:'Ripples Learning Services',year:2004}

cert = CERT;

  certificates: Certification = {
    title:'Certified Professional in Learning and Performance',
    year:'june,2005',
  };
  constructor() { }

  ngOnInit() {
  }

}