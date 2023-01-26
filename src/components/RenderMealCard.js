import PropTypes from 'prop-types';
import React from 'react';

function RenderMealCard({ result }) {
  const noMagic12 = 12;
  const data = result.slice(0, noMagic12);
  return (
    <div>
      {data.map((e, index) => (
        <div
          key={ e.idMeal + index }
        >
          <img
            src={ e.strMealThumb }
            alt={ e.strMeal }
            height="50px"
            width="50px"
          />
          <p>
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
