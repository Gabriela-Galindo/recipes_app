import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function RenderMealCard({ result }) {
  const noMagic12 = 12;
  const data = result.slice(0, noMagic12);
  const history = useHistory();

  if (result.length === 1) {
    const { idMeal } = result[0];
    history.push(`/meals/${idMeal}`);
  }
  // setar um estado com o retorno da API apos o handleClick
  // se o estado contem 1 item, a gente history push no id.
  // caso nao, a gente vai pra pagina /meals/value
  const handleClick = (value) => {
    history.push(`/meals/${value}`);
  };

  return (
    <div
      className=""
    >
      {data.map((e, index) => (
        <button
          key={ e.idMeal + index }
          onClick={ () => handleClick(e.idMeal) }
        >
          <div
            data-testid={ `${index}-recipe-card` }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ e.strMealThumb }
              alt={ e.strMeal }
              height="50px"
              width="50px"
            />
            <p
              data-testid={ `${index}-card-name` }
            >
              {e.strMeal}
            </p>
          </div>

        </button>
      ))}
    </div>
  );
}

RenderMealCard.propTypes = {
  result: PropTypes.arrayOf(Array).isRequired,
};

export default RenderMealCard;
