import React from 'react';
import RecipeInfo from './RecipeInfo';
import { filterNutrition } from '../helpers';

const Recipe = (props) => {
  const { data } = props;
  const nutritionData = filterNutrition(props.data);

  return (
    <section>
      <div className="row">
        <div className="column-6">
          <img src={data.image} alt={data.title} />
        </div>

        <div className="column-6">
          <h3>{`${data.name} ${data.headline}`}</h3>

          <RecipeInfo
            favorites={props.favorites}
            data={data}
            favoriteRecipe={props.favoriteRecipe}
            nutritionData={nutritionData}
            rateRecipe={props.rateRecipe}
            stars={props.stars}
          />
        </div>

      </div>
    </section>
  );
}

export default Recipe;
