import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import '../App.css';

function RecipeCard(props) {

  const [saved, setSaved] = useState(false);

  const recipe = props;

  const saveButton = (
    <button 
      className="recipe-button waves-effect waves-light btn-small" 
      onClick={recipe.save ? ( () => {
        recipe.saveRecipe(recipe)
        setSaved(true) 
      }) : ( () => {
        recipe.deleteRecipe(recipe)
      })}
    >
      {recipe.save ? "Save" : "Delete"}
    </button>
  );

  const saveMessage = (
    <p>
      Recipe saved!
    </p>
  );

  return (
    <div className={props.darkMode ? "dark-mode-recipe recipe" : "recipe"}>
      <h5 className="recipe-title">
        <a href={recipe.url} target="_blank" rel="noopener noreferrer">
          {recipe.label}
        </a>
      </h5>
      <div className="recipe-cuisine-meal">
        <p>{recipe.cuisineType}</p>
        <p>{recipe.mealType}</p>
      </div>
      <div className="recipe-ingredients">
        <ul>
          {recipe.ingredientLines.map((ingredient) => (
            <li key={`ingredient-${nanoid()}`}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <img className="recipe-image" src={recipe.image} alt="" />
      {saved ? saveMessage : saveButton}
    </div>
  )
}

export default RecipeCard;
