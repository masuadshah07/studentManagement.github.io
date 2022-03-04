import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service'
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { AdduserComponent } from './adduser/adduser.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditStudentComponent } from './edit-student/edit-student.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  rows: any = [];
  row:any;
  columns:any =[];  
  totalCount: number = 0;
  reorderable:any;  
  constructor(  private modalService: NgbModal,
    private projectService:ProjectService ,private router:Router ,
  ) { }  
  
  ngOnInit() {  
     
    this.projectService.getData().subscribe((res=>{
      this.rows=res;
    
      
    }));  
    
  }  
  
  
  // add(){  
  //   this.router.navigate(['/add-user'])
  // }  
  add(check:any,name:any) {
    const modalRef = this.modalService.open(AdduserComponent, { centered: true,size:'lg'});
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

    editStudent(row:any, check:any, name:any) {
      debugger
      const modalRef = this.modalService.open(EditStudentComponent, { centered: true, size:'lg' });
      modalRef.componentInstance.userId = row.id; //just for edit.. to access the needed row
      modalRef.componentInstance.statusCheck = check;
      modalRef.componentInstance.FormName = name;
  
      modalRef.result.then((data) => {
        // on close
        if (data == true) {
         
            this.rows = data;
         
        }
  
      }, (reason:any) => {
        // on dismiss
      });
    }

  
  deleteUser(data:any){

// this.projectService.getUserById(id).subscribe((data:any)=>{
//   console.log(data)
// })

// this.rows.splice(id-1,1)
// console.log(this.rows)
// this.projectService.deleteUser(id).subscribe((result=>{
//   console.log(result)
//   console.log(this.rows);
// }));
  // console.log(this.rows);
Swal.fire({
  title: 'Do you want to Delete?'+data.name,

  showCancelButton: true,
  confirmButtonText: `Yes`,
 
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    // this.spinner.hide();
    sessionStorage.setItem('STATE', 'false');
    sessionStorage.setItem('ROLE', '');
    sessionStorage.removeItem('token');
    sessionStorage.clear();
    //  this.router.navigate(['']);
    //  this.spinner.hide();
//  location.reload();
 this.rows.findIndex((x: { id: number; })=>x.id ==data.id)
  this.rows.splice(data.id-1,1)
// this.projectService.deleteUser(id).subscribe((result=>{
//   console.log(result)
  console.log(this.rows);
// }));
  } else if (result.isDenied) {
    
  }
})
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
signOut(): void {
    

  // this.name =localStorage.getItem()
  
       
  Swal.fire({
    title: 'Do you want to logout?',
  
    showCancelButton: true,
    confirmButtonText: `Yes`,
   
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      // this.spinner.hide();
      sessionStorage.setItem('STATE', 'false');
      sessionStorage.setItem('ROLE', '');
      sessionStorage.removeItem('token');
      sessionStorage.clear();
       this.router.navigate(['']);
      //  this.spinner.hide();
  //  location.reload();
    } else if (result.isDenied) {
      
    }
  })
    }

    getRowClass(row: any) {
      return 'table-light-grey-row';
    }
} 