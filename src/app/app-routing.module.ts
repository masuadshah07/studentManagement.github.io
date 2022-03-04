import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { FormComponent } from './form/form.component';
import { AdduserComponent } from './header/adduser/adduser.component';
import { HeaderComponent } from './header/header.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentComponent } from './student/student.component';
import { UnsavedGuard } from './unsaved.guard';
import { UpdateComponent } from './update/update.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path:"",component:UserLoginComponent},
  // {path:"user-login",redirectTo:"user-login",pathMatch:"full"},
  {path:"header",component:HeaderComponent},
  {path:"student-detail/:id",component:StudentDetailComponent
},
// {path:"add-user",component:AddUserComponent,
// canDeactivate:[UnsavedGuard]},
{path:"update/:id",component:UpdateComponent},
{path:"form",component:FormComponent},
{path:"user",component:AdduserComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
