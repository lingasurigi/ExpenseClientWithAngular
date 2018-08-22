import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchitdetailsComponent } from './listchitdetails.component';

describe('ListchitdetailsComponent', () => {
  let component: ListchitdetailsComponent;
  let fixture: ComponentFixture<ListchitdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListchitdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListchitdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
