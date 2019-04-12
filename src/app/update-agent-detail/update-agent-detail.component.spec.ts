import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAgentDetailComponent } from './update-agent-detail.component';

describe('UpdateAgentDetailComponent', () => {
  let component: UpdateAgentDetailComponent;
  let fixture: ComponentFixture<UpdateAgentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAgentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAgentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
