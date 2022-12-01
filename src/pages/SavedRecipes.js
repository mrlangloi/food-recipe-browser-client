import axios from 'axios';
import React, { useEffect, useState } from "react";
import RecipeGallery from "../components/RecipeGallery";
import Spinner from "../components/Spinner";

function SavedRecipes(props) {

    // this recipes useState here is to keep track of the saved recipes -- while the App.js recipes useState is to keep track of the searched recipes
    const [savedRecipes, setSavedRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect( () => {

        setLoading(true);

        async function axiosFetch() {
          const url = "http://localhost:3500/recipes/saved";
          const response = await axios.get(url);
          // console.log(response.data);
          setSavedRecipes(response.data);
          setLoading(false);
        };
    
        setTimeout(() => {
          axiosFetch();
        }, 1000);

    }, [setLoading])

    return (
        loading ? <Spinner/> : <RecipeGallery recipes={savedRecipes} setRecipes={setSavedRecipes} save={false} darkMode={props.darkMode}/>
    );
}

export default SavedRecipes;
