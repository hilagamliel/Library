import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerFormsComponent } from './borrower-forms.component';

describe('BorrowerFormsComponent', () => {
  let component: BorrowerFormsComponent;
  let fixture: ComponentFixture<BorrowerFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowerFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
