import React, { useState } from 'react';
import searchIcon from '../images/searchIcon.svg';
import SeachBar from './SeachBar';

function SearchIcon() {
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
    setShowInput(!showInput);
  };

  return (
    <>
      <button
        data-testid="search-top-btn"
        type="button"
        src={ searchIcon }
        onClick={ () => handleClick() }
      >
        <img
          src={ searchIcon }
          alt="search-icon"
        />
      </button>
      <div>
        { showInput && <SeachBar />}
      </div>
    </>
  );
}

export default SearchIcon;
