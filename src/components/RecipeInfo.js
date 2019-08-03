import React from 'react';
import RecipeDetailsPane from './RecipeDetailsPane';
import RecipeNutritionPane from './RecipeNutritionPane';
import RecipeIngredientsPane from './RecipeIngredientsPane';
import { openTab } from '../helpers';

const RecipeInfo = (props) => {
  const { data } = props;

  return (
    <div className="row">
      <div className="column-12">

        <div className="tab">
          <button className="tablinks active" data-id={data.id} onClick={openTab}>Details</button>
          <button className="tablinks" data-id={data.id} onClick={openTab}>Ingredients</button>
          <button className="tablinks" data-id={data.id} onClick={openTab}>Nutrition</button>
        </div>

        <RecipeDetailsPane
          favorites={props.favorites}
          favoriteRecipe={props.favoriteRecipe}
          data={data}
          rateRecipe={props.rateRecipe}
          stars={props.stars}
        />

        <RecipeNutritionPane data={data} nutritionData={props.nutritionData} />
        <RecipeIngredientsPane data={data} />

      </div>
    </div>
  );
}

export default RecipeInfo;
