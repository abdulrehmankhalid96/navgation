import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap  } from '@angular/router';




@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
   public DepartemtID;
   
  constructor(private route: ActivatedRoute, private router:Router) { 
   
  }
  
  ngOnInit() {
     //let id=parseInt(this.route.snapshot.paramMap.get("id"));
    // this.DepartemtID=id;
    this.route.paramMap.subscribe((params: ParamMap )=>{
      let id= parseInt(params.get('id'));
      this.DepartemtID=id;
    })
  }
  gonext(){
    let perID=this.DepartemtID+1;
    this.router.navigate(['/Department', perID]);
    if(perID>5){
      perID=5;
     this.router.navigate(['/Department',perID]);
    }
  }

   GoBack(){
  let nextID=this.DepartemtID-1;
  this.router.navigate(['/Department' , nextID]);
  if(nextID<1){
    nextID=1
    this.router.navigate(['/Department', nextID]);
  }
  
}
Back(){
  let selectID =this.DepartemtID;
  this.router.navigate(['/Department',{id:selectID}]);
}
overview(){
  this.router.navigate(['../overview'],{relativeTo: this.route});
}
contact(){
  this.router.navigate(['../contant'],{relativeTo:this.route});
}
}
