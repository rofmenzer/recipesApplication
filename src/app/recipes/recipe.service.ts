import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import { ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Bourek',
      'Algerian food amazingly tasty',
      'https://img-3.journaldesfemmes.fr/I48sy3I7FBg8MtJm8XQg-8XueRg=/748x499/smart/f372439b07614d7e8136cfda351f5544/recipe-jdf/372518.jpg',
      [new Ingredient('Meat', 500),
        new Ingredient('Dyoul', 10)
      ]),
    new Recipe(
      'Couscous',
      'tAnother algerian dish',
      'https://assets.afcdn.com/recipe/20200828/113350_w1024h576c1cx2880cy1920.jpg',
      [new Ingredient('Couscous', 1),
        new Ingredient('meat', 4)]),

  ];
  constructor(private shoppingListService: ShoppingListService){};

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number){

    return this.recipes[index];
  }
  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
}
}
