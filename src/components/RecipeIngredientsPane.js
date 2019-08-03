import React from 'react';

const RecipeIngredientsPane = (props) => {
  const { data } = props;

  return (
    <div id="Ingredients" className="tabcontent ingredients">
      <ul>
        { data.ingredients 
            ?  
            data.ingredients.map((ingredient,idx) => (
              <li key={idx}>{ingredient}</li>
            ))
            :
            null
        }
      </ul>
    </div>
  );
}

export default RecipeIngredientsPane;
