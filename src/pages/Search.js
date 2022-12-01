import React, { useState } from 'react';
import '../App.css';
import RecipeGallery from '../components/RecipeGallery';
import SearchForm from '../components/SearchForm';
import Spinner from '../components/Spinner';

function Search(props) {

  const [loading, setLoading] = useState(false);

  return (
    <div className="container s12">
      <SearchForm 
        setRecipes={props.setRecipes} 
        setLoading={setLoading}
      />
      { loading ? <Spinner/> 
        : <RecipeGallery 
            recipes={props.recipes} 
            setRecipes={props.setRecipes} 
            loading={loading} 
            setLoading={setLoading} 
            save={true}
            darkMode={props.darkMode}
          />
      }
    </div>
  );
}

export default Search;
