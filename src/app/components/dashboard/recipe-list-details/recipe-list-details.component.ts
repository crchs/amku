import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'recipe-list-details',
  templateUrl: './recipe-list-details.component.html',
  styleUrls: ['./recipe-list-details.component.scss']
})
export class RecipeListDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    //
    console.log('recipe id: ', id)
    // this.heroService.getHero(id)
    //   .subscribe(hero => this.hero = hero);
  }

}
