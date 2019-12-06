import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HDLoginComponent } from './hd-login.component';


describe('LoginComponent', () => {
  let component: HDLoginComponent;
  let fixture: ComponentFixture<HDLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HDLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HDLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
