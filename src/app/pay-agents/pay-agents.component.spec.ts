import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayAgentsComponent } from './pay-agents.component';

describe('PayAgentsComponent', () => {
  let component: PayAgentsComponent;
  let fixture: ComponentFixture<PayAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
