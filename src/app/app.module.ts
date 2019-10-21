import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule, routercomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DeptartmentContentComponent } from './deptartment-content/deptartment-content.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';



@NgModule({
  declarations: [
    AppComponent,
    routercomponent,
    DepartmentDetailsComponent,
    DeptartmentContentComponent,
    DepartmentOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
