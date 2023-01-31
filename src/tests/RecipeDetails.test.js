import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './helpers/renderWithRouter';
import DetailsMeals from '../components/DetailsMeals';
import MockedMeals from './helpers/MockedMeals';

describe('Testa o componente Recipes', () => {
  // test('', () =>{
  //   const loc = '/meals/123';
  //   const meal = loc.slice(1, 6);
  //   const drinks = loc.slice(1, 7);

  //   expect(meals).
  // });

  test('Possui o um titulo de recomendaçoes h3', async () => {
    jest.spyOn(global, 'fetch');

    await act(() => {
      global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValueOnce(MockedMeals),
      });
      renderWithRouter(<DetailsMeals />, { initialEntries: ['/meals/53013'] });
    });

    const h3 = screen.getByText('Big Mac');
    expect(await h3).toBeInTheDocument();
  });
});
