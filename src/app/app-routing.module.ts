import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { EmployeComponent } from './employe/employe.component';
import { PagenotComponent } from './pagenot/pagenot.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import {DepartmentOverviewComponent} from './department-overview/department-overview.component';
import { DeptartmentContentComponent } from './deptartment-content/deptartment-content.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path:'' , redirectTo:'/Employee' , pathMatch:"full"},
  {path: 'Department', component:DeptlistComponent},
  {path:"Department/:id" ,component:DepartmentDetailsComponent,
  children:[
    {path:'overview', component:DepartmentOverviewComponent},
    {path:'contant', component:DeptartmentContentComponent}
  ]
},
  {path: 'Employee', component:EmployeComponent},
  {path: "**",component:PagenotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routercomponent = [DeptlistComponent,EmployeComponent,PagenotComponent,DepartmentDetailsComponent,DepartmentOverviewComponent,DeptartmentContentComponent];