import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const FetchCategoryDrinksContext = createContext();

function FetchCategoryDrinksProvider({ children }) {
  const [searchCategory, setCategory] = useState([]);

  const fetchCategoryDrinksAPI = async () => {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

    const response = await fetch(URL);
    const json = await response.json();
    setCategory(json.drinks);
  };

  const contextValue = useMemo(() => ({
    searchCategory,
    fetchCategoryDrinksAPI,
  }), [searchCategory]);

  return (
    <FetchCategoryDrinksContext.Provider value={ contextValue }>
      {children}
    </FetchCategoryDrinksContext.Provider>
  );
}

FetchCategoryDrinksProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FetchCategoryDrinksProvider;
