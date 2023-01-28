import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RenderMealCard from '../components/RenderMealCard';
import MealsFilter from '../components/MealsFilter';
import { FetchMealsContext } from '../context/FetchMealsContext';

function Meals() {
  const { searchMeals, fetchMealsAPI } = useContext(FetchMealsContext);
  useEffect(() => {
    const fetch = async () => {
      await fetchMealsAPI('s');
    };
    fetch();
  }, []);

  const card = (
    <div>
      <MealsFilter />
      <RenderMealCard result={ searchMeals } />
    </div>
  );

  return (
    <div>
      <Header />
      { searchMeals === null
        ? global.alert('Sorry, we haven\'t found any recipes for these filters.')
        : card }
      <Footer />
    </div>
  );
}

export default Meals;
