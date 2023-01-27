import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RenderMealCard from '../components/RenderMealCard';
import { FetchMealsContext } from '../context/FetchMealsContext';

function Meals() {
  const { searchMeals } = useContext(FetchMealsContext);

  return (
    <div>
      <Header />
      { searchMeals === null
        ? global.alert('Sorry, we haven\'t found any recipes for these filters.')
        : <RenderMealCard result={ searchMeals } /> }
      <Footer />
    </div>
  );
}

export default Meals;
