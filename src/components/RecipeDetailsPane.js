import React from 'react';
import { isUndefined } from 'lodash';

const RecipeDetailsPane = (props) => {
  const { data } = props;
  const favorite = props.favorites.filter(obj => obj.recipeId === data.id).pop();
  const stars = props.stars.filter(obj => obj[data.id]).pop();

  return (
    <div id="Details" className="tabcontent">
      <p>{data.description}</p>
      <div className="recipe-details">
        <div className="recipe-details__icon" data-recipe-id={data.id} >
          <span ><i onClick={props.favoriteRecipe} className={ !isUndefined(favorite) && data.id === favorite.recipeId ? "fa fa-bookmark fa-lg" : "fa fa-bookmark-o fa-lg"} aria-hidden="true"></i>
          </span>
        </div>
        <div className="recipe-details__icon" data-recipe-id={data.id}>
          <span>
            { [1,2,3,4,5].map((star,key) => (
              <i
                onClick={props.rateRecipe}
                data-star-id={star}
                className={ !isUndefined(stars) && (parseInt(star,10) <= parseInt(stars[data.id],10)) ? "fa fa-star fa-lg" : "fa fa-star-o fa-lg"} aria-hidden="true"
                key={key}
              ></i>
            )) }
          </span>
        </div>
      </div>
      <div className="recipe-details">
        <div className="recipe-details__data-group">
          <p>Difficulty: {data.difficulty}</p>
        </div>
        <div className="recipe-details__data-group">
          <p>Origin: {data.country}</p>
        </div>
      </div>
        <div>
          { data.rating
              ? <p>Average rating: {data.rating} of {data.ratings} ratings</p>
              : null
          }
        </div>
      <br/>
      <p>Recipe by: {data.user.name}</p>
    </div>
  );
}

export default RecipeDetailsPane;
