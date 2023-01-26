import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const FetchMealsContext = createContext();

function FetchMealsProvider({ children }) {
  const [searchMeals, setSearchMeals] = useState([]);

  const fetchMealsAPI = async (param1, param2) => {
    let URL = '';
    if (param1 === 'i') {
      URL = `https://www.themealdb.com/api/json/v1/1/filter.php?${param1}=${param2}`;
    } else {
      URL = `https://www.themealdb.com/api/json/v1/1/search.php?${param1}=${param2}`;
    }
    const response = await fetch(URL);
    const json = await response.json();
    setSearchMeals(json.meals);
  };

  const contextValue = useMemo(() => ({
    searchMeals,
    fetchMealsAPI,
  }), [searchMeals]);

  return (
    <FetchMealsContext.Provider value={ contextValue }>
      {children}
    </FetchMealsContext.Provider>
  );
}

FetchMealsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FetchMealsProvider;
