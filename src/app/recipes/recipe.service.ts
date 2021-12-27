import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import { ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'this is simply a test',
      'https://www.simplyrecipes.com/thmb/UIpnKDZSVS4eIKgreoH6QauP0KQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-vertical-a-1600-0eafb4cd27b74617abb36379751eed51.jpg',
      [new Ingredient('Meat', 1),
        new Ingredient('French Fries', 10)
      ]),
    new Recipe(
      'Another test Recipe',
      'this is simply a test',
      'https://www.simplyrecipes.com/thmb/UIpnKDZSVS4eIKgreoH6QauP0KQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-vertical-a-1600-0eafb4cd27b74617abb36379751eed51.jpg',
      [new Ingredient('cheese', 2),
        new Ingredient('bread', 2)]),

  ];
  constructor(private shoppingListService: ShoppingListService){};

  getRecipe() {
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
}
}
