import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAgentDetailComponent } from './view-agent-detail.component';

describe('ViewAgentDetailComponent', () => {
  let component: ViewAgentDetailComponent;
  let fixture: ComponentFixture<ViewAgentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAgentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAgentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
