import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import PageTitle from './PageTitle';
import SearchIcon from './SearchIcon';

function Header() {
  const location = useLocation().pathname;
  const path = location.substring(1);
  const history = useHistory();

  const capitalizeFirstLetter = (string) => string.charAt(0)
    .toUpperCase() + string.slice(1);

  return (
    <div>
      <PageTitle title={ capitalizeFirstLetter(path) } />
      <button
        type="button"
        data-testid="profile-top-btn"
        onClick={ () => history.push('/profile') }
        src={ profileIcon }
      >
        <img src={ profileIcon } alt="icone de perfil" />
      </button>
      { location !== ('/profile'
        || '/done-recipes'
        || '/favorite-recipes') && <SearchIcon /> }
    </div>
  );
}

export default Header;
