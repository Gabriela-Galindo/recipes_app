import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const FetchCategoryMealsContext = createContext();

function FetchCategoryMealsProvider({ children }) {
  const [searchCategory, setCategory] = useState([]);

  const fetchCategoryMealsAPI = async () => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

    const response = await fetch(URL);
    const json = await response.json();
    setCategory(json.meals);
  };

  const contextValue = useMemo(() => ({
    searchCategory,
    fetchCategoryMealsAPI,
  }), [searchCategory]);

  return (
    <FetchCategoryMealsContext.Provider value={ contextValue }>
      {children}
    </FetchCategoryMealsContext.Provider>
  );
}

FetchCategoryMealsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FetchCategoryMealsProvider;
