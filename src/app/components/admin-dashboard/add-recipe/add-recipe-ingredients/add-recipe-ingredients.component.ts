import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient';
import { Unit } from 'src/app/models/unit';

@Component({
  selector: 'add-recipe-ingredients',
  templateUrl: './add-recipe-ingredients.component.html',
  styleUrls: ['./add-recipe-ingredients.component.scss']
})
export class AddRecipeIngredientsComponent implements OnInit {
  @Output() newIngredientEvent = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [];
  showIngredients: boolean = true;
  units$: Observable<Unit[]>;

  ingredientsForm = new FormGroup({
    name: new FormControl('',
      [Validators.required]
    ),
    amount: new FormControl('',
      [Validators.required]
    ),
    unit: new FormControl('',
      [Validators.required]
    )
  })

  constructor(
    private db: AngularFireDatabase
  ) {
    this.units$ = db.list('units').valueChanges() as unknown as Observable<Unit[]>;
  }

  ngOnInit(): void {
    // TODO: list of possible ingredients should be available from the service
    // toigether with macros and kcals info
  }

  addIngredient(form: any): void {
    this.ingredients.push({
      name: form.name,
      amount: form.amount,
      unit: form.unit,
    })
    this.formReset();
    this.newIngredientEvent.emit(this.ingredients);
  }

  removeIngredient(ingredient: Ingredient): void {
    const index = this.ingredients.indexOf(ingredient);
    if (index > -1) {
      this.ingredients.splice(index, 1);
    }
    this.newIngredientEvent.emit(this.ingredients);
  }

  private formReset() {
    this.ingredientsForm.reset();

    Object.keys(this.ingredientsForm.controls)
      .forEach(key => {
        this.ingredientsForm.get(key)?.setErrors(null);
      });
  }
}
