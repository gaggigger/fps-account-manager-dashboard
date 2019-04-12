import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAgentDetailComponent } from './single-agent-detail.component';

describe('SingleAgentDetailComponent', () => {
  let component: SingleAgentDetailComponent;
  let fixture: ComponentFixture<SingleAgentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAgentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAgentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
