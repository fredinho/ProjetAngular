import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmplComponent } from './new-empl.component';

describe('NewEmplComponent', () => {
  let component: NewEmplComponent;
  let fixture: ComponentFixture<NewEmplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEmplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
