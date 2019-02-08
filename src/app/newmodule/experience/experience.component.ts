import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
 

  EXPERIENCE:any=[

    {
                  title: 'Orange Blossoms Technology Pvt. Ltd.',
          name:'HR Associate',
          values: {  '2005-2010': true,
                      'Work From Home':true, }
      },
      {
          title: 'TheoreX Edutech LLP',
          name:'HR Manager',
          values: {
              
              ' November, 2005, ': true,
              'PAN India':true }
              
      },
      
      {
          title: 'HR Super Admin',
          name:'HR Super Admin',
          values: {
              
              'August,2006': true,  
              'mumbai':true
          },
      },
    ]
  constructor() { }

  ngOnInit() {
  }

}
