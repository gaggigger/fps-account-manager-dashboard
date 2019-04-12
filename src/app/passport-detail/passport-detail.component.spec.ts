import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportDetailComponent } from './passport-detail.component';

describe('PassportDetailComponent', () => {
  let component: PassportDetailComponent;
  let fixture: ComponentFixture<PassportDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassportDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
