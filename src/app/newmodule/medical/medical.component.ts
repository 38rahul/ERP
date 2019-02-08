import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {
  medical: any = [
    {
      
        name: 'Injury',
        values: {
          '5 Approved Leaves': true,
          '25/03/2014': true,
        }
    },
    
  ];
  disability :any= [
    {
      
        title:'DISABILITY___________',
        name:'Disability Type:',
        values:{
                  'Health Impariments':true,
               },
    
    },
    {
      
      
      name:'Disability:',
      values:{
                'Health Impariments':true,
             },
  
  },
  {
      
      
    name:'Description/Reason:',
    values:{
              'High Blood Sugar':true,
           },

}
  ];
  dependency: any = [
    {
        title:'DEPENDENCY DETAILS________',
        name: 'Karen',
      
        values: {
          'Spouse': true,
          
        }
    },
    {
      
      name: 'Lorry',
    
      values: {
        'Mother': true,
        
      }
  },
    
  ];
  constructor() { }

  ngOnInit() {
  }

}