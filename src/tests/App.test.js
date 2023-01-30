import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
// import Footer from '../components/Footer';

const EMAIL_INPUT_TESTID = 'email-input';
const PASSWORD_INPUT_TESTID = 'password-input';

describe('Testa a tela de Login', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('Testa se a tela de Login possui inputs de email e senha', () => {
    render(<App />);

    const inputEmail = screen.getByTestId(EMAIL_INPUT_TESTID);
    expect(inputEmail).toBeInTheDocument();

    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TESTID);
    expect(inputPassword).toBeInTheDocument();
  });

  it('Testa se a tela de Login possui um botão de Enter', () => {
    render(<App />);

    const enterBttn = screen.getByRole('button', { name: /entrar/i });
    expect(enterBttn).toBeInTheDocument();
  });

  it('Testa se, o botão é validado com um email e senha válidos', () => {
    render(<App />);

    const inputEmail = screen.getByTestId(EMAIL_INPUT_TESTID);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TESTID);
    const enterBttn = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(inputEmail, 'teste@teste.com');
    userEvent.type(inputPassword, '1234567');
    userEvent.click(enterBttn);
  });
});

describe('Testa o componente Header', () => {
  it('Testa se o Header possui um elemento Title', () => {
    render(<App />);

    const titleElement = screen.getByTestId('page-title');
    expect(titleElement).toBeInTheDocument();
  });

  it('Testa se o Header possui uma imagem com o ícone do perfil', () => {
    render(<App />);

    const profileIcon = screen.getByTestId('profile-top-btn');
    expect(profileIcon).toBeInTheDocument();
  });

  it('Testa se o Header possui um elemento de pesquisa', () => {
    render(<App />);

    const searchIcon = screen.getByTestId('search-top-btn');
    expect(searchIcon).toBeInTheDocument();
  });

  it('Testa se ao clicar no botão do ícone de perfil, é redirecionado à pagína de Perfil', () => {
    const { history } = renderWithRouter(<App />);

    const profileIcon = screen.getByTestId('profile-top-btn');
    expect(profileIcon).toBeInTheDocument();

    userEvent.click(profileIcon);
    expect(history.location.pathname).toBe('/profile');
  });
});

describe('Testa o componente Search Bar', () => {
  it('Testa se o componente possui um elemento de search input', () => {
    render(<App />);

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });

  it('Testa se o componente possui três elementos de radio input', () => {
    render(<App />);

    const radioIngredient = screen.getByTestId('ingredient-search-radio');
    const radioNameSearch = screen.getByTestId('name-search-radio');
    const radioFirstLetterSearch = screen.getByTestId('first-letter-search-radio');

    expect(radioIngredient).toBeInTheDocument();
    expect(radioNameSearch).toBeInTheDocument();
    expect(radioFirstLetterSearch).toBeInTheDocument();
  });

  it('Testa se o componente possui um botão de Buscar', () => {
    render(<App />);

    const buttonSearch = screen.getByTestId('exec-search-btn');
    expect(buttonSearch).toBeInTheDocument();
  });
});

// describe('Test Footer Componet', () => {
//   test('Footer component renders the correct buttons and click events', () => {
//     const history = useHistory();
//     const { getByTestId } = render(<Footer />);

//     expect(getByTestId('footer')).toBeInTheDocument();
//     expect(getByTestId('drinks-bottom-btn')).toBeInTheDocument();
//     expect(getByTestId('meals-bottom-btn')).toBeInTheDocument();

//     fireEvent.click(getByTestId('drinks-bottom-btn'));
//     expect(history.push).toHaveBeenCalledWith('/drinks');

//     fireEvent.click(getByTestId('meals-bottom-btn'));
//     expect(history.push).toHaveBeenCalledWith('/meals');
//   });
// });
