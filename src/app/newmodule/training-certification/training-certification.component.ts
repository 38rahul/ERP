import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-certification',
  templateUrl: './training-certification.component.html',
  styleUrls: ['./training-certification.component.css']
})
export class TrainingCertificationComponent implements OnInit {
  causes: any = [
    {
    
        title: 'Attitudinal & Beahvioural Training',
        name:'Ripples Learning Services',
        values: {
          
          '2004': true,
        }
    },
    {
        title: 'Leadership Management Training',
        name:'Multispectra Constultants',
        values: {
        
            '2005': true,
            
        }
            
    },
    
    {
        title: 'Personality Developement Training',
        name:'Nirmal Holdings Ltd',
        values: {
            
            '2005': true,
            
        },
    },
    {
      title: 'Human Resource Management Training',
      name:'ASMS Group',
      values: {
          
          '2006': false,
          
      },
  },
];
CERTIFICATION:any=[

{
    
      name: 'Certified Professional in Learning and Performance',
      values: {  'June, 2006': true, }
  },
  {
      name: 'Certified Professional in Human Resource',
      values: {
          
          ' November, 2005, ': true, }
          
  },
  
  {
      name: 'SHRM Certified Professional',
      values: {
          
          'August,2006': true,  
      },
  },
]

  constructor() { }

  ngOnInit() {
  }

}
