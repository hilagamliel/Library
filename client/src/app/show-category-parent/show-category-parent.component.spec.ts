import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCategoryParentComponent } from './show-category-parent.component';

describe('ShowCategoryParentComponent', () => {
  let component: ShowCategoryParentComponent;
  let fixture: ComponentFixture<ShowCategoryParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCategoryParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCategoryParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
