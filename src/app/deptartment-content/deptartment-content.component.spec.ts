import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptartmentContentComponent } from './deptartment-content.component';

describe('DeptartmentContentComponent', () => {
  let component: DeptartmentContentComponent;
  let fixture: ComponentFixture<DeptartmentContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptartmentContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptartmentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
