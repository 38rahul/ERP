import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewmoduleModule } from './newmodule/newmodule.module';
import { FormsModule } from '@angular/forms';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { ParentComponent } from './parent/parent.component';
import { HrComponent } from './hr/hr.component';



@NgModule({
  declarations: [
    AppComponent,
    LeaveRequestComponent,
    ParentComponent,
    HrComponent,

    
    
  ],
  imports: [
    BrowserModule,
    NewmoduleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent ],
})
export class AppModule { }
