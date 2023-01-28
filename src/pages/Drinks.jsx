import React, { useContext, useEffect } from 'react';
import DrinksFilter from '../components/DrinksFilter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RenderDrinkCard from '../components/RenderDrinkCard';
import { FetchDrinksContext } from '../context/FetchDrinksContext';

function Drinks() {
  const { searchDrinks, fetchDrinksAPI } = useContext(FetchDrinksContext);

  useEffect(() => {
    const fetch = async () => {
      await fetchDrinksAPI('s');
    };
    fetch();
  }, []);

  const card = (
    <div>
      <DrinksFilter />
      <RenderDrinkCard result={ searchDrinks } />
    </div>
  );

  return (
    <div>
      <Header />
      { searchDrinks === null
        ? global.alert('Sorry, we haven\'t found any recipes for these filters.')
        : card }
      <Footer />
    </div>
  );
}

export default Drinks;
