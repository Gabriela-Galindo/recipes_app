import React, { useContext, useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { FetchDrinksContext } from '../context/FetchDrinksContext';
import { FetchMealsContext } from '../context/FetchMealsContext';

function DetailsDrinks() {
  const [clickedShare, setClickedShare] = useState(false);
  const { detailsDrinks } = useContext(FetchDrinksContext);
  const {
    recomendationMeals,
    fetchRecomendationMeals,
  } = useContext(FetchMealsContext);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchAPI = async () => {
      await fetchRecomendationMeals();
    };
    fetchAPI();
  }, []);

  const startRecipe = () => {
    history.push(`/drinks/${id}/in-progress`);
  };

  const share = () => {
    const link = `http://localhost:3000/drinks/${id}`;
    setClickedShare(true);
    navigator.clipboard.writeText(link);
  };

  const noMagic = 6;
  const recomendation = recomendationMeals.slice(0, noMagic);
  const getStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));

  return (
    <div>
      {
        detailsDrinks.map((elem) => (
          <div key={ elem.idDrink }>
            <img
              src={ elem.strDrinkThumb }
              alt={ elem.strDrink }
              data-testid="recipe-photo"
              height="200px"
              width="200px"
            />
            <h1 data-testid="recipe-title">{ elem.strDrink }</h1>
            <h3 data-testid="recipe-category">{ elem.strAlcoholic }</h3>
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
          </div>
        ))
      }
      <button
        data-testid="share-btn"
        onClick={ share }
      >
        Compartilhar
      </button>
      { clickedShare && <p>Link copied!</p> }
      <button
        data-testid="favorite-btn"
      >
        Favoritar
      </button>
      <h3>Recomendações</h3>
      <Carousel>
        {
          recomendation.map((elem, index) => (
            <Carousel.Item
              key={ elem + index }
            >
              <img
                data-testid={ `${index}-recommendation-card` }
                src={ elem.strMealThumb }
                alt={ elem.strMeal }
                width="100px"
                height="100px"
              />
              <Carousel.Caption>
                <h3
                  data-testid={ `${index}-recommendation-title` }
                >
                  {elem.strMeal}
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
      <button
        data-testid="start-recipe-btn"
        className="footer"
        onClick={ startRecipe }
      >
        { getStorage === null ? 'Start Recipe' : 'Continue Recipe'}
      </button>
    </div>
  );
}

export default DetailsDrinks;
