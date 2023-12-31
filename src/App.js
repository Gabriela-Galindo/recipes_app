import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipeDetails from './pages/RecipeDetails';
import RecipeInProgress from './pages/RecipeInProgress';

function App() {
  return (
    <div className="meals">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/meals" component={ Recipes } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/drinks" component={ Recipes } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
          <Route exact path="/drinks/:id" component={ RecipeDetails } />
          <Route exact path="/meals/:id" component={ RecipeDetails } />
          <Route
            exact
            path="/meals/:id/in-progress"
            component={ RecipeInProgress }
          />
          <Route
            exact
            path="/drinks/:id/in-progress"
            component={ RecipeInProgress }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
