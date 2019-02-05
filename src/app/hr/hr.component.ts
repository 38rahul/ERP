import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

  data: any = [
    {   contact:'DETAILS______________',
        name: 'Work Mail:',
        values: {
          'abc@gmail.com': false,
            
        },
    },
    {  
        name: 'Work Phone:',
        values: {
          '342222333222': false,
            
        },
    },
    {  
      name: 'Reporting:',
      values: {
        'john doe': false,
          
      },
  },
  {  
    name: 'Date of Joining:',
    values: {
      '01/01/2014': false,
        
    },
},
{  
  name: 'Full Time Employee:',
  values: {
    'speciality ltd.': false,
      
  },
},
  ]
  constructor() { }

  ngOnInit() {
  }

}
