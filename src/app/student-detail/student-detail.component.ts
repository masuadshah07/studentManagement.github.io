import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  userData:any=[]
  constructor(private projectService:ProjectService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.projectService.getUserById(this.activatedRoute.snapshot.params['id']).subscribe((result)=>{
      console.log(result)
      this.userData=result
  })
     
  }
}
