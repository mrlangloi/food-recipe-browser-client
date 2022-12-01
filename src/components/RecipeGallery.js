import axios from 'axios';
import { nanoid } from 'nanoid';
import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeGallery = (props) => {
  const { recipes } = props;

  const recipesNoun = props.save ? (recipes.length !== 1 ? "Recipe Results" : "Recipe Result") : (recipes.length !== 1 ? "Recipes Saved" : "Recipe Saved");

  async function saveRecipe(item) {

    const URL = 'http://localhost:3500/recipes/saved';
    const response = await axios.post(URL, {
      recipe : {
        "id": item.id,
        "key": item.label,
        "label": item.label,
        "image": item.image,
        "mealType": [
          item.mealType
        ],
        "cuisineType": [
          item.cuisineType
        ],
        "ingredientLines": item.ingredientLines,
        "url": item.url
      }
    });

    // console.log(response.data);
  }

  async function deleteRecipe(recipe) {
    const URL = `http://localhost:3500/recipes/delete/${recipe.id}`;
    const response = await axios.delete(URL);

    // console.log(response.data);
    props.setRecipes(response.data.savedRecipes);
  }

  return (
    <div className="row recipe-gallery-div">
      <h4 className='list-head'>{recipes.length} {recipesNoun}</h4>
      <div className="recipe-card-div">
        {recipes.map((item) => {
            return (
              <RecipeCard
                id={item._id ? item._id : item.recipe.label}
                key={`${item.recipe.label}-${nanoid()}`}
                label={item.recipe.label}
                image={item.recipe.image}
                mealType={item.recipe.mealType[0]}
                cuisineType={item.recipe.cuisineType[0]}
                ingredientLines={item.recipe.ingredientLines}
                url={item.recipe.url}
                save={props.save}
                saveRecipe={saveRecipe}
                deleteRecipe={deleteRecipe}
                darkMode={props.darkMode}
              />
            );
        })}
      </div>
    </div>
  );
};
export default RecipeGallery;
