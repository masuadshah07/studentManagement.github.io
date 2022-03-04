import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/project.service';
import { TosterService } from 'src/app/toaster.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  alert:boolean=false;
  studentForm:any;
  rows:any=[];
  groupList:any=[];
  isDirty=true;
  FormName: any;
  constructor(private pojectservice:ProjectService,
     private router:Router,
     private toastr:TosterService,
     private _NgbActiveModal: NgbActiveModal) { }

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

  // this.alert=true;

// this.router.navigate(['/header']);
this.activeModal.close(true);
});
    // this.studentForm.reset();
    // this.rows.forEach((item:any, index: any) => {

    //   this.groupList.push(item);
      
    //   } );
    //   console.log(this.groupList);
       
      }

    

// alertClose(){
//   this.alert=false;
// }

// getPrev(){

//   this.rows.forEach((item:any, index: any) => {

// this.groupList.push(item.id);

// });
// console.log(this.groupList); 
// }
get activeModal() {
  return this._NgbActiveModal;
}
msg(){
  this.toastr.showSuccessMesssage("Student Added Successfully");
}
}