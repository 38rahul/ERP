import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Selfservice1Component } from './selfservice1/selfservice1.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { InformationHeaderComponent } from './information-header/information-header.component';
import { DocumentsComponent } from './documents/documents.component';
import { TrainingCertificationComponent } from './training-certification/training-certification.component';
import { MedicalComponent } from './medical/medical.component';
import { OthersComponent } from './others/others.component';
import {KeysPipe} from '../newmodule/custom-pipe';
@NgModule({
  declarations: [Selfservice1Component, NavigationComponent, HeaderComponent, InformationHeaderComponent, DocumentsComponent, TrainingCertificationComponent, MedicalComponent, OthersComponent,KeysPipe],
  imports: [
    CommonModule,
    FormsModule
   
  ],
  exports:[Selfservice1Component,NavigationComponent,HeaderComponent,InformationHeaderComponent,DocumentsComponent,TrainingCertificationComponent,MedicalComponent,OthersComponent,KeysPipe]
})
export class NewmoduleModule { }
