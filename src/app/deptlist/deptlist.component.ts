import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-deptlist',
  templateUrl: './deptlist.component.html',
  styleUrls: ['./deptlist.component.css']
})
export class DeptlistComponent implements OnInit {
     public selectedID;
     departments= [
       {"id":1,"name":"Angular"},
       {"id":2,"name":"Node"},
       {"id":3,"name":"MongoDB"},
       {"id":4,"name":"Ruby"},
       {"id":5,"name":"Bootstrap"}
     
     ]

  constructor(private router:Router, private route:ActivatedRoute) {
   
   }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap )=>{
      let id= parseInt(params.get('id'));
      this.selectedID=id;})
  }
  
  onselect(dapt){
    this.router.navigate(['/Department',dapt.id]);

  }
  IsSelected(dapt){
    return dapt.id===this.selectedID;
  }

}
