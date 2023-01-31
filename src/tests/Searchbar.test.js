import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

const execSearch = getByTestId('exec-search-btn');

describe('Test SearchBar Component', () => {
  it('should call the global alert when inputText is empty', () => {
    global.alert = jest.fn();
    render(<SearchBar />);

    act(() => {
      fireEvent.click(execSearch);
    });

    expect(global.alert).toHaveBeenCalled();
  });

  it('should call the global alert when radio is "f" and inputText has more than 1 character', () => {
    global.alert = jest.fn();
    const { getByTestId } = render(<SearchBar />);
    const firstLetterTypeRadio = getByTestId('first-letter-type');
    const inputText = getByTestId('search-input');

    act(() => {
      fireEvent.click(firstLetterTypeRadio);
    });

    act(() => {
      fireEvent.change(inputText, { target: { value: 'ab' } });
      fireEvent.click(execSearch);
    });

    expect(global.alert).toHaveBeenCalled();
  });

  it('should call fetchMealsAPI when location is "/meals"', async () => {
    const mockFetchMealsAPI = jest.fn();
    jest.spyOn(React, 'useContext').mockImplementationOnce(() => ({
      fetchMealsAPI: mockFetchMealsAPI,
    }));

    jest.spyOn(ReactRouterDom, 'useLocation').mockImplementationOnce(() => ({
      pathname: '/meals',
    }));

    const { getByTestId } = render(<SearchBar />);
    const ingredientSearchRadio = getByTestId('ingredient-search');

    act(() => {
      fireEvent.click(ingredientSearchRadio);
      fireEvent.click(execSearch);
    });

    expect(mockFetchMealsAPI).toHaveBeenCalled();
  });

  it('should call fetchDrinksAPI when location is "/drinks"', async () => {
    const mockFetchDrinksAPI = jest.fn();
    jest.spyOn(React, 'useContext').mockImplementationOnce(() => ({
      fetchDrinksAPI: mockFetchDrinksAPI,
    }));

    jest.spyOn(ReactRouterDom, 'useLocation').mockImplementationOnce(() => ({
      pathname: '/drinks',
    }));

    const { getByTestId } = render(<SearchBar />);
    const ingredientSearchRadio = getByTestId('ingredient-search');

    act(() => {
      fireEvent.click(ingredientSearchRadio);
      fireEvent.click(execSearch);
    });

    expect(mockFetchDrinksAPI).toHaveBeenCalled();
  });
});
