import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FetchMealsContext } from '../context/FetchMealsContext';
import { FetchCategoryMealsContext } from '../context/FetchCategoryMealsContext';

function MealsFilter() {
  const { searchMeals, fetchMealsAPI } = useContext(FetchMealsContext);
  const [prevClicked, setPrevCliked] = useState('All');
  const {
    searchCategory,
    fetchCategoryMealsAPI,
  } = useContext(FetchCategoryMealsContext);
  const noMagic5 = 5;
  const categoryData = searchCategory.slice(0, noMagic5);
  const history = useHistory();

  useEffect(() => {
    const fetch = async () => {
      await fetchCategoryMealsAPI();
    };
    fetch();
  }, []);

  if (searchMeals.length === 1) {
    const { idMeal } = searchMeals[0];
    history.push(`/Meals/${idMeal}`);
  }

  const funcCategory = async (param) => {
    if (param === 'All' || param === prevClicked) {
      await fetchMealsAPI('s');
      setPrevCliked('All');
    } else {
      await fetchMealsAPI('c', param);
      setPrevCliked(param);
    }
  };

  return (
    <div>
      <button
        key="All"
        data-testid="All-category-filter"
        type="radio"
        name="category"
        id="All"
        value="All"
        onClick={ () => funcCategory('All') }
      >
        All

      </button>
      {categoryData.map((e, index) => (
        <button
          key={ `${index}` }
          data-testid={ `${e.strCategory}-category-filter` }
          name="category"
          type="radio"
          id={ e.strCategory }
          value={ e.strCategory }
          onClick={ () => funcCategory(e.strCategory) }
        >
          { e.strCategory }

        </button>
      ))}
    </div>
  );
}

export default MealsFilter;
