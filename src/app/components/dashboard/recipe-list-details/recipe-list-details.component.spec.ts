import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListDetailsComponent } from './recipe-list-details.component';

describe('RecipeListDetailsComponent', () => {
  let component: RecipeListDetailsComponent;
  let fixture: ComponentFixture<RecipeListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeListDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
