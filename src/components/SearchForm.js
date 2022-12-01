import axios from 'axios';
import React, { useState } from 'react';
import '../App.css';

function SearchForm(props) {

  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [meal, setMeal] = useState("");

  const mealTypes = ["", "Breakfast", "Lunch", "Dinner"];
  const cuisineTypes = ["", "American", "Asian", "British", "Caribbean", "Central Europe", "Chinese", "Eastern Europe", "French", "Greek", "Indian", "Italian", "Japanese", "Korean", "Kosher", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "South American", "South East Asian"];

  async function beginSearch(query, meal, cuisine) {

    const URLquery = query !== "" ? `${query}` : "any";
    const URLmeal = meal !== "" ? `${meal}` : "any";
    const URLcuisine = cuisine !== "" ? `${cuisine}` : "any";

    const URL = 
      `http://localhost:3500/recipes/${URLquery}/${URLmeal}/${URLcuisine}`;
    
    // console.log(URL);
    const response = await axios.get(URL);

    // console.log(response.data);
    props.setRecipes(response.data.hits);
    props.setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.setLoading(true);
    setTimeout( () => {
      beginSearch(query, meal, cuisine);
    }, 1000);
  }

  function handleChange(e) {
    setQuery(e.target.value);
    // console.log(e.target.value);
  }

  function updateMealType(e) {
    e.preventDefault();
    // console.log(e.target.value);
    setMeal(e.target.value);
  }

  function updateCuisineType(e) {
    e.preventDefault();
    // console.log(e.target.value);
    setCuisine(e.target.value);
  }

  return (
    <div className="row search-form-div">

      <h1 className="header center teal-text text-lighten-2">Food Recipe Browser</h1>
      <div className="row center">
        <h5 className="header col s12 light">Get started by typing into the search bar below</h5>
      </div>

      <div className="row s12 dropdown-box-div">

        {/* mealType dropdown box */}
        <div className="dropdown-box-mealtype">
          <select onChange={updateMealType}>
            {mealTypes.map( (mealType) => (
              <option 
                value={`${mealType}`} 
                key={`${mealType}`}
              >
                {mealType}
              </option>
            ))}
          </select>
          <label>Select a meal type</label>
        </div>

        {/* cuisineType dropdown box */}
        <div className="dropdown-box-cuisinetype">
          <select onChange={updateCuisineType}>
            {cuisineTypes.map( (cuisineType) => (
              <option 
                value={`${cuisineType.replace(" ", "%20")}`} 
                key={`${cuisineType.replace(" ", "%20")}`}
              >
                {cuisineType}
              </option>
            ))}
          </select>
          <label>Select a cuisine type</label>
        </div>

      </div>
      
      {/* text field */}
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12 search-bar-div">
            <div className="search-bar-field">
              <i className="material-icons prefix">search</i>
              <input id="icon_prefix" type="text" className="validate" onChange={handleChange}/>
              <label htmlFor="icon_prefix"></label>
            </div>
            <button type="submit" className="waves-effect waves-light btn-large">Search</button>
          </div>
        </div>
      </form>

    </div>
  );
}

export default SearchForm;
