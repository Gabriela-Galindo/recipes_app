import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import FavoriteRecipes from '../pages/FavoriteRecipes';

describe('Testa a página principal de Receitas', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const mockFavoriteRecipes = '[{"id":"53013","type":"meal","nationality":"American","category":"Beef","alcoholicOrNot":"","name":"Big Mac","image":"https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg"},{"id":"53065","type":"meal","nationality":"Japanese","category":"Seafood","alcoholicOrNot":"","name":"Sushi","image":"https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg"},{"id":"17837","type":"drink","nationality":"","category":"Ordinary Drink","alcoholicOrNot":"Alcoholic","name":"Adam","image":"https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg"}]';
  const idMock = 'favoriteRecipes';

  const setLocalStorage = (id, data) => {
    window.localStorage.setItem(id, JSON.stringify(data));
  };
  it('Testa se ao renderizar os favorites, aparece', async () => {
    // jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');
    // Object.setPrototypeOf(window.localStorage.setItem, jest.fn());
    renderWithRouter(<FavoriteRecipes />, { initialEntries: ['/favorite-recipes'] });
    setLocalStorage(idMock, mockFavoriteRecipes);
    // expect(localStorage.getItem(idMock)).toEqual(JSON.stringify(mockFavoriteRecipes));

    screen.debug();
  });
});
