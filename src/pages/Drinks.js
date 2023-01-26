import React, { useContext } from 'react';
import Header from '../components/Header';
import RenderDrinkCard from '../components/RenderDrinkCard';
import { FetchDrinksContext } from '../context/FetchDrinksContext';

function Drinks() {
  const { searchDrinks } = useContext(FetchDrinksContext);

  return (
    <div>
      <Header />
      <RenderDrinkCard result={ searchDrinks } />
    </div>
  );
}

export default Drinks;
