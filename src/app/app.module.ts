import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {NgSelectModule} from '@ng-select/ng-select'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';

import {HttpClientModule} from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './student/edit-user/edit-user.component';
import { ProjectService } from './project.service';
import { UpdateComponent } from './update/update.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import {ToastrModule, ToastrService} from 'ngx-toastr'
import { TosterService } from './toaster.service';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormComponent } from './form/form.component';
import { AdduserComponent } from './header/adduser/adduser.component';
import { EditStudentComponent } from './header/edit-student/edit-student.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentComponent,
    
    AddUserComponent,
    EditUserComponent,
    UpdateComponent,
    StudentDetailComponent,
    UserLoginComponent,
    FormComponent,
    AdduserComponent,
    EditStudentComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxDatatableModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgSelectModule
  ],
  providers: [ProjectService,TosterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
