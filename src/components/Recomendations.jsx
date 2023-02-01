import React, { useContext, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { FetchDrinksContext } from '../context/FetchDrinksContext';

function Recomendations() {
  const {
    recomendationDrinks,
    fetchRecomendationDrinks,
  } = useContext(FetchDrinksContext);

  useEffect(() => {
    const fetchAPI = async () => {
      await fetchRecomendationDrinks();
    };
    fetchAPI();
  }, []);

  const noMagic = 6;
  const recomendation = recomendationDrinks.slice(0, noMagic);

  return (
    <div>
      <h3>Recomendações</h3>
      <Carousel>
        {
          recomendation.map((elem, index) => (
            <Carousel.Item
              key={ elem + index }
            >
              <img
                data-testid={ `${index}-recommendation-card` }
                src={ elem.strDrinkThumb }
                alt={ elem.strDrink }
                width="100px"
                height="100px"
              />
              <Carousel.Caption>
                <h3
                  data-testid={ `${index}-recommendation-title` }
                >
                  {elem.strDrink}
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  );
}

export default Recomendations;
