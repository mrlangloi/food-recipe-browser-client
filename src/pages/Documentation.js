import React from "react";

function Documentation() {

    return (
        <div className="documentation-div">
            <h5>Documentation</h5>
            <div className="doc-p-div">
                <p>
                    * 1. Select a meal type from the dropdown box
                </p>
                <p>
                    * 2. Select a cuisine type from the dropdown box
                </p>
                <p>
                    * 3. Search a specific keyword of an ingredient or of a meal in the given search field
                </p>
                <p>
                    4. To save a recipe, click on the save button below the recipe card
                </p>
                <p>
                    5. To view your saved recipes, navigate to the 'Saved Recipes' tab at the top left
                </p>
                <p>
                    ** 6. Click on the recipe name for further details(instructions, cook times, etc)
                </p>
                <br/>
                <p>
                    * leave blank for 'any'
                </p>
                <p>
                    ** some recipe links taken from the API may be broken
                </p>
                <p>
                    Note: This application will only display a randomized list of recipes up to 20 matches
                </p>
                <p>
                    The backend server may take a while to wake up upon first load
                </p>
            </div>
        </div>
        
    );
}

export default Documentation;
