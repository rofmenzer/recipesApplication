import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import { ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
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
  addRecipe (recipe: Recipe){
   this.recipes.push(recipe);
   this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());

  }
  deleteRecipe (index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
