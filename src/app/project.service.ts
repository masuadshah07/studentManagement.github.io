import { Injectable } from '@angular/core'; 
import { from, Observable } from 'rxjs';  
import { catchError } from 'rxjs/operators'; 
import {HttpClient} from '@angular/common/http' 
import { id } from '@swimlane/ngx-datatable';
  
@Injectable({  
  providedIn: 'root'  
})  
export class ProjectService {  
  url="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) {  
   
  // this.total_count = this.hero_pages.length; 
}
getData(){
 return this.http.get(this.url);
}
adduserData(data :any){
  return this.http.post(this.url,data);
}
deleteUser(id:number){
  return this.http.delete(`${this.url}/${id}`);
}
getUserById(id:number){
  return this.http.get(`${this.url}/${id}`);
}
updateuser(data: any){
  return this.http.put(`${this.url}`,data);
}
} 
