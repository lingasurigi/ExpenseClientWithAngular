import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitComponent } from './chit.component';

describe('ChitComponent', () => {
  let component: ChitComponent;
  let fixture: ComponentFixture<ChitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
