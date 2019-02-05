import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  data: any = [
    {
        name: 'Alloted Leave Time',
        values: {
          '24': false,
          '30': false,
          '31': false,
          '32': false,
            
        },
    },
    {
      name: 'Used Leaves',
      values: {
        '24': false,
        '30': false,
        '31': false,
        '32': false,
          
      },
  },
  {
    name: 'Leave Balance',
    values: {
      '24': false,
      '30': false,
      '31': false,
      '32': false,
        
    },
},


  ]


  constructor() { }

  ngOnInit() {
  }

}
