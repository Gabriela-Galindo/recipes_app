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

  return (
    <div>
      {data.map((e, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ e.idMeal + index }
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
      ))}
    </div>
  );
}

RenderMealCard.propTypes = {
  result: PropTypes.arrayOf(Array).isRequired,
};

export default RenderMealCard;
