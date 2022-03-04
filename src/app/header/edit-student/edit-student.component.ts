import { Component, Input, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import{ActivatedRoute,Router} from '@angular/router';
import{ProjectService} from '../../project.service';
import {TosterService} from '../../toaster.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  id:any;
city:any;
alert:boolean=false;
 rows: any=[];
 FormName:any;
 @Input() userId: any;


  constructor(private activatedRouter:ActivatedRoute,private router:Router,
     private projectService:ProjectService,
     private toastr:TosterService,
     private _NgbActiveModal: NgbActiveModal) { }

  ngOnInit(): void {
    // this.activatedRouter.snapshot.params['id']// It is use to get id from the url
  this.projectService.getUserById(this.userId).subscribe((result)=>{
    console.log(result)
    this.rows=result
   
  })
  }
  updateUser(data: any){
    debugger
    this.alert=true;
     this.projectService.updateuser(data).subscribe((result)=>{
       console.log(result);
       
      
      } )
    console.log(data)
   
    
    // this.router.navigate(['/header']);
    this.activeModal.close(true);
}
// closeAlert(){
//   this.alert=false
// }

get activeModal() {
  return this._NgbActiveModal;
}
msg(){
  this.toastr.showSuccessMesssage("Student Updated Successfully");
}


}
