import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'recipe-list-element',
  templateUrl: './recipe-list-element.component.html',
  styleUrls: ['./recipe-list-element.component.scss']
})
export class RecipeListElementComponent implements OnInit {

  @Input() recipe: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
