import { Component, OnInit, Input } from '@angular/core';
import { About} from '../../about';
import { information } from  '../../mock-data';
@Component({
  selector: 'app-selfservice1',
  templateUrl: './selfservice1.component.html',
  styleUrls: ['./selfservice1.component.css']
})
export class Selfservice1Component implements OnInit {
  demo: any = [
    {   contact:'CONTACT INFORMATION_______________',
        name: 'phone:',
        values: {
          '5636636363': false,
            
        },
    },
    {
        name: 'Current address:',
        values: {
            'salt lake': false,
        },
            
    },
    
    {
        name: 'Permanent address:',
        values: {
            'newtown': false,
        },
    },
    {
      name: 'Personal Email:',
      values: {
          'abc@gmail.com': false,
      },
  },
  {
    name: 'Website:',
    values: {
        'www.abc.com': false,
    },
},
{ contact:'EDUCATIONAL BACKGROUND________________',
  name: 'Schooling:',
  values: {
      'jadavpur': false,
  },
},
{
  name: 'Graduate:',
  values: {
      'Techno India': false,
  },
},
{
  name: 'Post Graduate:',
  values: {
      'Jadavpur University': false,
  },
},
{ contact:'PERSONAL DETAILS_______________',
  name: 'Marital Status:',
  values: {
      'single': false,
  },
},
{
  name: 'Nationality',
  values: {
      'Indian': false,
  },
},
{
  name: 'Ethnic code',
  values: {
      'Americam Indian': false,
  },
},
{
  name: 'Language',
  values: {
      'Benngali,Hindi,english': false,
  },
},
{
  name: 'Date Of Birth',
  values: {
      '12/12/1989': false,
  },
},
{
  name: 'Blood Group',
  values: {
      'O+': false,
  },
}
]



  constructor() { }

  ngOnInit() {
  }

}
