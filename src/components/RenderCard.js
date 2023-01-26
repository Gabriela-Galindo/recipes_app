import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';

function RenderCard({ result, name, thumb }) {
  const location = useLocation().pathname;
  let local = '';
  if (location === '/meals') {
    local = 'strMeal';
  } if (location === '/drinks') {
    local = 'strDrink';
  }
  const noMagic12 = 12;
  const data = result.slice(0, noMagic12);
  return (
    <div>
      {data.map((e, index) => (
        <div
          key={ Object.values(e)[2] + index }
          data-testid={ `${index}-recipe-card` }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ e.thumb }
            alt={ e.name }
            width="50px"
            height="50px"
          />
          <p
            data-testid={ `${index}-card-name` }
          >
            { e.name }
          </p>
        </div>
      ))}
    </div>
  );
}

RenderCard.propTypes = {
  page: PropTypes.string.isRequired,
  result: PropTypes.arrayOf(Array).isRequired,
};

export default RenderCard;
