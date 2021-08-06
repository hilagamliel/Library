import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCliComponent } from './second-cli.component';

describe('SecondCliComponent', () => {
  let component: SecondCliComponent;
  let fixture: ComponentFixture<SecondCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
