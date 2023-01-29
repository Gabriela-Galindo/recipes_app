import React, { useContext, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { FetchMealsContext } from '../context/FetchMealsContext';
import { FetchDrinksContext } from '../context/FetchDrinksContext';

function DetailsMeals() {
  const { detailsMeals } = useContext(FetchMealsContext);
  const {
    recomendationDrinks,
    fetchRecomendationDrinks,
  } = useContext(FetchDrinksContext);
  const getStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));

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
      {
        detailsMeals.map((elem) => (
          <div key={ elem.idMeal }>
            <img
              src={ elem.strMealThumb }
              alt={ elem.strMeal }
              data-testid="recipe-photo"
              height="200px"
              width="200px"
            />
            <h1 data-testid="recipe-title">{ elem.strMeal }</h1>
            <h3 data-testid="recipe-category">{ elem.strCategory }</h3>
            <ul>
              {Object.keys(elem).reduce((acc, cur) => {
                if (cur.includes('Ingredient')
                && elem[cur] !== ''
                && elem[cur] !== null) {
                  return [...acc, elem[cur]];
                }
                return acc;
              }, []).map((e, i) => (
                <li
                  key={ i }
                  data-testid={ `${i}-ingredient-name-and-measure` }
                >
                  {`${e} - ${elem[`strMeasure${i + 1}`]}`}
                </li>
              ))}
            </ul>
            <p data-testid="instructions">{ elem.strInstructions}</p>
            <iframe
              data-testid="video"
              title="recipe"
              width="280px"
              height="280px"
              src={ `https://www.youtube.com/embed/${elem.strYoutube}` }
            />
          </div>
        ))
      }
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
      <button
        data-testid="start-recipe-btn"
        className="footer"
      >
        { getStorage === null ? 'Start Recipe' : 'Continue Recipe'}
      </button>
    </div>
  );
}

export default DetailsMeals;
