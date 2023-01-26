import PropTypes from 'prop-types';
import React from 'react';

function RenderDrinkCard({ result }) {
  const noMagic12 = 12;
  const data = result.slice(0, noMagic12);

  return (
    <div>
      {data.map((e, index) => (
        <div
          key={ e.idDrink + index }
        >
          <img
            src={ e.strDrinkThumb }
            alt={ e.srtDrink }
            height="50px"
            width="50px"
          />
          <p>
            { e.strDrink }
          </p>
        </div>
      ))}
    </div>
  );
}

RenderDrinkCard.propTypes = {
  result: PropTypes.arrayOf(Array).isRequired,
};

export default RenderDrinkCard;
