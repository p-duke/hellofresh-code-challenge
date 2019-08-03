import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import RecipeList from './RecipeList';
import Login from './Login';

const Main = (props) => {
  return (
    <div>
      <div className="spacer"></div>
      <Switch>
        <Route path="/recipes" render={() => (
          <RecipeList
            favorites={props.favorites}
            favoriteRecipe={props.favoriteRecipe}
            recipes={props.recipes}
            rateRecipe={props.rateRecipe}
            stars={props.stars}
          />
        )} />

        <Route path="/login" component={Login} />
        <Route path='*' render={() => ( <Redirect to="/recipes" />)} />
      </Switch>
    </div>
  );
}

export default Main;
