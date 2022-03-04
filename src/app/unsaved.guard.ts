import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// import { AddUserComponent } from './add-user/add-user.component';
import { AdduserComponent } from './header/adduser/adduser.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<AdduserComponent> {
  canDeactivate(component: AdduserComponent){
    if(component.isDirty){
      return window.confirm("you have unsaved changes!are you sure to leave?");
    }
    return true;
  }
  
}
