import React, { useContext } from 'react';
import Header from '../components/Header';
import RenderCard from '../components/RenderCard';
import { FetchMealsContext } from '../context/FetchMealsContext';

function Meals() {
  const { searchMeals } = useContext(FetchMealsContext);

  return (
    <div>
      <Header />
      <RenderCard result={ searchMeals } name="strMeal" thumb="strMealThumb" />
    </div>
  );
}

export default Meals;
