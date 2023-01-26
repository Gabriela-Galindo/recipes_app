import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import DoneRecipes from './pages/Done-Recipes';
import FavoriteRecipes from './pages/Favorite-recipes';

function App() {
  return (
    <div className="meals">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/meals" component={ Meals } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
          <Route exact path="/drinks/:id-da-receita" component={ Drinks } />
          {/* <Route exact path="/meals/:id-da-receita" component={ Meals } /> */}
          {/*
          <Route exact path="/meals/:id-da-receita/in-progress" component={ Meals } />
          <Route exact path="/drinks/:id-da-receita/in-progress" component={ Meals } />
           */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
