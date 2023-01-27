import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RenderDrinkCard from '../components/RenderDrinkCard';
import { FetchDrinksContext } from '../context/FetchDrinksContext';

function Drinks() {
  const { searchDrinks } = useContext(FetchDrinksContext);

  return (
    <div>
      <Header />
      { searchDrinks === null
        ? global.alert('Sorry, we haven\'t found any recipes for these filters.')
        : <RenderDrinkCard result={ searchDrinks } /> }
      <Footer />
    </div>
  );
}

export default Drinks;
