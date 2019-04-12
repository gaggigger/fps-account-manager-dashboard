import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAgentListComponent } from './all-agent-list.component';

describe('AllAgentListComponent', () => {
  let component: AllAgentListComponent;
  let fixture: ComponentFixture<AllAgentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAgentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAgentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
