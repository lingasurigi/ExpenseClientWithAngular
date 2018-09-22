import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchitdetailsComponent } from './addchitdetails.component';

describe('AddchitdetailsComponent', () => {
  let component: AddchitdetailsComponent;
  let fixture: ComponentFixture<AddchitdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddchitdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchitdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
