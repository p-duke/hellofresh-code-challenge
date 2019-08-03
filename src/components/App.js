import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      recipes: props.recipeData,
      favorites: JSON.parse(localStorage.getItem('recipeFavorites')) || [],
      stars: JSON.parse(localStorage.getItem('ratedRecipes')) || []
    }
    this.favoriteRecipe = this.favoriteRecipe.bind(this);
    this.rateRecipe = this.rateRecipe.bind(this);
  }

  rateRecipe(e) {
    e.preventDefault();
    const recipeId = e.target.parentElement.parentElement.dataset.recipeId;
    const starId = e.target.dataset.starId;
    const oldRatedRecipes = JSON.parse(localStorage.getItem('ratedRecipes')) || [];
    const currRatingValues = oldRatedRecipes.map(obj => Object.keys(obj).pop());

    if (currRatingValues.includes(recipeId)) {
      const currRatedRecipes = oldRatedRecipes.map(obj => {
        if (Object.keys(obj).pop() === recipeId) {
          obj[recipeId] = starId;
        }
        return obj;
      });

      localStorage.setItem('ratedRecipes', JSON.stringify(currRatedRecipes));
      this.setState({ stars: currRatedRecipes });
    } else {
      const newRating = { [recipeId]: starId};

      oldRatedRecipes.push(newRating);
      localStorage.setItem('ratedRecipes', JSON.stringify(oldRatedRecipes));
      this.setState({ stars: oldRatedRecipes });
    }
  }

  favoriteRecipe(e) {
    e.preventDefault();
    const newRecipeId = e.target.parentElement.parentElement.dataset.recipeId;
    const oldRecipeFavorites = JSON.parse(localStorage.getItem('recipeFavorites')) || [];
    const currRecipeValues = oldRecipeFavorites.map(obj => obj.recipeId);

    if (currRecipeValues.includes(newRecipeId)) {
      const filteredRecipes = oldRecipeFavorites.filter(obj => obj.recipeId !== newRecipeId);

      localStorage.setItem('recipeFavorites', JSON.stringify(filteredRecipes));
      this.setState({ favorites: filteredRecipes });
    } else {
      const newFavorite = {recipeId: newRecipeId};

      oldRecipeFavorites.push(newFavorite);
      localStorage.setItem('recipeFavorites', JSON.stringify(oldRecipeFavorites));
      this.setState({ favorites: oldRecipeFavorites });
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Main
            favoriteRecipe={this.favoriteRecipe}
            rateRecipe={this.rateRecipe}
            recipes={this.state.recipes}
            favorites={this.state.favorites}
            stars={this.state.stars}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
