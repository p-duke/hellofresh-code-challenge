import React from 'react';
import Recipe from './Recipe';

const RecipeList = (props) => {
  const { recipes } = props;

  return (
    <div className="wrapper">
        { recipes
            ? recipes.map((recipe, key) => {
              return <Recipe
                favorites={props.favorites}
                favoriteRecipe={props.favoriteRecipe}
                data={recipe} key={recipe.id}
                rateRecipe={props.rateRecipe}
                stars={props.stars}
              />
            })
            : <p>Loading...</p>
        }
    </div>
  );
};

export default RecipeList;
