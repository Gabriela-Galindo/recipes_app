import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';

describe('Test Footer Componet', () => {
  test('Footer component renders the correct buttons and click events', () => {
    const history = useHistory();
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('footer')).toBeInTheDocument();
    expect(getByTestId('drinks-bottom-btn')).toBeInTheDocument();
    expect(getByTestId('meals-bottom-btn')).toBeInTheDocument();

    fireEvent.click(getByTestId('drinks-bottom-btn'));
    expect(history.push).toHaveBeenCalledWith('/drinks');

    fireEvent.click(getByTestId('meals-bottom-btn'));
    expect(history.push).toHaveBeenCalledWith('/meals');
  });
});
