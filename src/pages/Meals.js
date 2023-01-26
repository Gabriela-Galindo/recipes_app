import React, { useContext } from 'react';
import Header from '../components/Header';
import RenderMealCard from '../components/RenderMealCard';
import { FetchMealsContext } from '../context/FetchMealsContext';

function Meals() {
  const { searchMeals } = useContext(FetchMealsContext);

  return (
    <div>
      <Header />
      <RenderMealCard result={ searchMeals } />
    </div>
  );
}

export default Meals;
