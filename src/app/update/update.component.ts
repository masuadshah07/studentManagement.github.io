import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import{ProjectService} from '../project.service';
import { FormControl,FormGroup } from '@angular/forms';
import {ToastrService} from 'ngx-toastr'
import {TosterService} from '../toaster.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
id:any;
city:any;
alert:boolean=false;
 userData: any=[]

  constructor(private activatedRouter:ActivatedRoute,private router:Router, private projectService:ProjectService,private toastr:TosterService) { }

  ngOnInit(): void {
    
  this.projectService.getUserById(this.activatedRouter.snapshot.params['id']).subscribe((result)=>{
    console.log(result)
    this.userData=result
   
  })
  }
  updateUser(data: any){
    debugger
    this.alert=true;
     this.projectService.updateuser(data).subscribe((result)=>{
       console.log(result);
       
      
      } )
    console.log(data)
    this.toastr.showSuccessMesssage("User Updated Successfully")
    
    this.router.navigate(['/header']);
}
closeAlert(){
  this.alert=false
}
}
