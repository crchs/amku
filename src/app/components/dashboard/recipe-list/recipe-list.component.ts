import { Component, OnInit } from '@angular/core';
import { RecipePartial } from 'src/app/models/recipe-partial';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipePartial[] = [
    {
      id: 1,
      title: 'recipe 1',
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Pound_layer_cake.jpg'
    },
    {
      id: 2,
      title: 'recipe 2 tutaj będzie dłuższy tytuł',
      img: 'https://food-images.files.bbci.co.uk/food/recipes/rainbow_cake_20402_16x9.jpg'
    },
    {
      id: 3,
      title: 'recipe 3',
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DR_xDiShk'
    },
    {
      id: 1,
      title: 'recipe 1',
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Pound_layer_cake.jpg'
    },
    {
      id: 2,
      title: 'recipe 2',
      img: 'https://food-images.files.bbci.co.uk/food/recipes/rainbow_cake_20402_16x9.jpg'
    },
    {
      id: 3,
      title: 'recipe 3',
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DR_xDiShk'
    },
    {
      id: 1,
      title: 'recipe 1',
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Pound_layer_cake.jpg'
    },
    {
      id: 2,
      title: 'recipe 2',
      img: 'https://food-images.files.bbci.co.uk/food/recipes/rainbow_cake_20402_16x9.jpg'
    },
    {
      id: 3,
      title: 'recipe 3',
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DR_xDiShk'
    },
    {
      id: 1,
      title: 'recipe 1',
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Pound_layer_cake.jpg'
    },
    {
      id: 2,
      title: 'recipe 2',
      img: 'https://food-images.files.bbci.co.uk/food/recipes/rainbow_cake_20402_16x9.jpg'
    },
    {
      id: 3,
      title: 'recipe 3',
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DR_xDiShk'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
