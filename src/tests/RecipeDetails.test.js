import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import MockedMeals from './helpers/MockedMeals';
import Mockdrinks from './helpers/Mockdrinks';
import RecipeDetails from '../pages/RecipeDetails';

describe.only('Testa o componente Recipes', () => {
  // test('', () =>{
  //   const loc = '/meals/123';
  //   const meal = loc.slice(1, 6);
  //   const drinks = loc.slice(1, 7);

  //   expect(meals).
  // });

  test('Possui o um titulo de recomendaçoes h3', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(Mockdrinks),
    }).mockResolvedValue({
      json: jest.fn().mockResolvedValue(MockedMeals),
    });
    renderWithRouter(<RecipeDetails />, { initialEntries: ['/meals/53013'] });

    const h3 = await screen.findByText('Big Mac');
    expect(h3).not.toBeInTheDocument();
    // screen.debug();
  });

  test('Possui o um titulo de recomendaçoes h3', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(Mockdrinks),
    }).mockResolvedValue({
      json: jest.fn().mockResolvedValue(MockedMeals),
    });
    renderWithRouter(<RecipeDetails />, { initialEntries: ['/drinks/17837'] });

    const h3 = await screen.findByText('Adam');
    expect(h3).toBeInTheDocument();
    // screen.debug();
  });
});
