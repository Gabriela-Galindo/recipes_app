import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const FetchDrinksContext = createContext();

function FetchDrinksProvider({ children }) {
  const [searchDrinks, setSearchDrinks] = useState([]);

  const fetchDrinksAPI = async (param1, param2) => {
    let URL = '';
    if (param1 === 'i') {
      URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${param1}=${param2}`;
    } else {
      URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?${param1}=${param2}`;
    }
    const response = await fetch(URL);
    const json = await response.json();
    setSearchDrinks(json.drinks);
  };

  const contextValue = useMemo(() => ({
    searchDrinks,
    fetchDrinksAPI,
  }), [searchDrinks]);

  return (
    <FetchDrinksContext.Provider value={ contextValue }>
      {children}
    </FetchDrinksContext.Provider>
  );
}

FetchDrinksProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FetchDrinksProvider;
