import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ProjectService} from '../project.service';
import { EditUserComponent } from './edit-user/edit-user.component';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  rows: any = [];
  columns:any =[];  
  totalCount: number = 0; 
  reorderable:any;   
  
  constructor(  
    private modalService: NgbModal,
    private projectService:ProjectService ,private router:Router, 
  ) { }  
  
  ngOnInit() {  
     
    this.projectService.getData().subscribe((res=>{
      this.rows=res;
    
      
    }));  
    
  }  
  
  
  // add(){  
  //   this.router.navigate(['/add-user'])
  // }  
  
  deleteUser(id:number){

// this.projectService.getUserById(id).subscribe((data:any)=>{
//   console.log(data)
// })

// this.rows.splice(id-1,1)
// console.log(this.rows)
this.projectService.deleteUser(id).subscribe((result=>{
  console.log(result)
}))
  }

  updateFilter(event:any) {
    const val = event.target.value.toLowerCase();
    debugger
if(val==""){
  this.ngOnInit()
}
else{
  
  this.rows=this.rows.filter((emp:any)=>
    emp.name.toLowerCase().indexOf(val.toLowerCase())!==-1)
  
  
}
    
}
add(check:any,name:any) {
  const modalRef = this.modalService.open(EditUserComponent, { centered: true,size:'lg'});
  modalRef.componentInstance.statusCheck = check;
  modalRef.componentInstance.FormName = name;
  modalRef.result.then((data:any) => {
    // on close
    if (data == true) {

     
        this.rows = data;
      };

    }
  , (reason:any) => {
    // on dismiss
  });
}

}  

