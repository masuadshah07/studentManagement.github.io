import { Component, OnInit } from '@angular/core';
import{FormControl} from '@angular/forms'
import{Router} from '@angular/router';
import {TosterService} from '../toaster.service';


import{ProjectService} from '../project.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  alert:boolean=false;
  studentForm:any;
  rows:any=[];
  groupList:any=[];
  isDirty=true;
  constructor(private pojectservice:ProjectService, private router:Router,private toastr:TosterService) { }

  ngOnInit(): void {
    this.pojectservice.getData().subscribe((res=>{
    this.rows=res;
  }));  
  }
  addUser(data:any){
debugger
this.pojectservice.adduserData(data).subscribe((result)=>{
  console.log(result);
  this.rows.push(data)
  console.log(this.rows.push(data))
  console.log(this.rows)

  this.alert=true;
this.toastr.showSuccessMesssage("User Added Successfully");
this.router.navigate(['/header']);
});
    // this.studentForm.reset();
    // this.rows.forEach((item:any, index: any) => {

    //   this.groupList.push(item);
      
    //   } );
    //   console.log(this.groupList);
       
      }

    

alertClose(){
  this.alert=false;
}

// getPrev(){

//   this.rows.forEach((item:any, index: any) => {

// this.groupList.push(item.id);

// });
// console.log(this.groupList); 
// }

}
