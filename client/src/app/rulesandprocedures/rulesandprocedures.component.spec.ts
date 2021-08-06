import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesandproceduresComponent } from './rulesandprocedures.component';

describe('RulesandproceduresComponent', () => {
  let component: RulesandproceduresComponent;
  let fixture: ComponentFixture<RulesandproceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesandproceduresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesandproceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
