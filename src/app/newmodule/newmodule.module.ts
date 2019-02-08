import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Selfservice1Component } from './selfservice1/selfservice1.component';
import { NavigationComponent } from './navigation/navigation.component';

import { FormsModule } from '@angular/forms';
import { InformationHeaderComponent } from './information-header/information-header.component';
import { DocumentsComponent } from './documents/documents.component';


import { MedicalComponent } from './medical/medical.component';
import { OthersComponent } from './others/others.component';
import {KeysPipe} from '../newmodule/custom-pipe';
import { TrainingCertificationComponent } from './training-certification/training-certification.component';
import { ExperienceComponent } from './experience/experience.component';
import { ServicerequestComponent } from './servicerequest/servicerequest.component';
import {RequestcategoriesComponent} from './servicerequest/requestcategories/requestcategories.component';

@NgModule({
  declarations: [Selfservice1Component, NavigationComponent,ExperienceComponent, InformationHeaderComponent, 
    DocumentsComponent,  MedicalComponent, OthersComponent,KeysPipe, TrainingCertificationComponent, ExperienceComponent,
    ServicerequestComponent,
    RequestcategoriesComponent],
  imports: [
    CommonModule,
    FormsModule,
   
  ],
  exports:[Selfservice1Component,NavigationComponent,ExperienceComponent,InformationHeaderComponent,
    DocumentsComponent,TrainingCertificationComponent,MedicalComponent,OthersComponent,ServicerequestComponent,
    RequestcategoriesComponent,KeysPipe]
})
export class NewmoduleModule { }
