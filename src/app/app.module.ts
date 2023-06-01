import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightswitchComponent } from './lightswitch/lightswitch.component';
import { UserComponent } from './user/user.component';
import { StudentComponent } from './student/student.component';



@NgModule({
  declarations: [
    AppComponent,
    LightswitchComponent,
    UserComponent,
    StudentComponent,
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
