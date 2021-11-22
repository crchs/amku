import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  categories$: Observable<any[]>;
  text: string = '';
  imgSrc: string = '';
  imgError: boolean = false;
  selectedImage: any = null;
  ingredients: Ingredient[] = [];
  recipeAdded: boolean = false;

  recipeForm = new FormGroup({
    title: new FormControl('',
      [Validators.required]),
    category: new FormControl('',
      [Validators.required]),
    text: new FormControl('',
      [Validators.required]),
  })

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {
    this.categories$ = db.list('categories').valueChanges();
  }

  ngOnInit(): void {
    // this.categories$.subscribe((categories) => {
    //   console.log('aaaa', categories);
    // })
  }

  async addRecipe(): Promise<void> {
    const recipes = this.db.list('recipes');
    await recipes.push({
      title: this.recipeForm.value.title,
      category: this.recipeForm.value.category,
      text: this.recipeForm.value.text,
      ingredients: this.ingredients,
    });
    await this.uploadImage();
    this.formReset();
    this.recipeAdded = true;
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients = ingredients;
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '';
      this.selectedImage = null;
      this.imgError = true;
    }
  }

  private formReset() {
    this.recipeForm.reset();

    Object.keys(this.recipeForm.controls)
      .forEach(key => {
        this.recipeForm.get(key)?.setErrors(null);
      });
  }

  private uploadImage(): void {
    const filePath = this.recipeForm.value.title;
    this.storage.upload(filePath, this.selectedImage).then(() => {
      return true;
    })
  }
}
