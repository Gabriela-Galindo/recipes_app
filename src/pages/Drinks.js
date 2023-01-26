import React from 'react';
import Header from '../components/Header';
import RenderCard from '../components/RenderCard';
import { FetchDrinksContext } from '../context/FetchDrinksContext';

function Drinks() {
  const { searchDrinks } = useContext(FetchDrinksContext);

  return (
    <div>
      <Header />
      <RenderCard result={ searchDrinks } name="strMeal" thumb="strMealThumb" />
    </div>
  );
}

export default Drinks;
