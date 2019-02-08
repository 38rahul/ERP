import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requestcategories',
  templateUrl: './requestcategories.component.html',
  styleUrls: ['./requestcategories.component.css']
})
export class RequestcategoriesComponent implements OnInit {
  object: any = [ {
    name:'Accounts',
    values:{
      'this is an Erp Project with lots of functionality lorem ipsum color set ':true,
    },
  },
  {
    name:'cartridge',
    values:{
      'this is an Erp Project with lots of functionality lorem ipsum color set ':true,
    },
  },
  {
    name:'Employment',
    values:{
      'this is an Erp Project with lots of functionality lorem ipsum color set ':true,
    },
  }, {
    name:'Transportation',
    values:{
      'this is an Erp Project with lots of functionality lorem ipsum color set ':true,
    },
  }, 
  {
    name:'Hardware',
    values:{
      'this is an Erp Project with lots of functionality lorem ipsum color set ':true,
    },
  },{
    name:'Add categories',
    values:{'':true},
  }
  
]

  constructor() { }

  ngOnInit() {
  }

}
