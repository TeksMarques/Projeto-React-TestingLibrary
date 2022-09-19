import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testes do requisito 6', () => {
  const pokemon = 'Pikachu sprite';
  it('A imagem do pokemon possui o src correto', () => {
    renderWithRouter(<App />);
    const imgEl = screen.getByRole('img', { name: pokemon });
    expect(imgEl).toBeInTheDocument();
    expect(imgEl).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
  it('A imagem do pokemon possui o alt <name> sprite', () => {
    renderWithRouter(<App />);
    const imgEl = screen.getByRole('img', { name: pokemon });
    expect(imgEl).toBeInTheDocument();
    expect(imgEl).toHaveAttribute('alt', pokemon);
  });
  it('Testa imagem e alt do favorito', () => {
    renderWithRouter(<App />);
    const detalhes = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detalhes);
    const favoritoPokemon = screen.getByLabelText(/pokémon favoritado?/i);
    userEvent.click(favoritoPokemon);
    const pokemonFavorite = screen.getByRole('img', { name:
        'Pikachu is marked as favorite' });
    expect(pokemonFavorite).toBeInTheDocument();
    expect(pokemonFavorite).toHaveAttribute(
      'src',
      '/star-icon.svg',
    );
  });
  it('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);
    const tipo = screen.getByTestId('pokemon-type', { name: /electric/i });
    expect(tipo).toBeInTheDocument();
    expect(tipo.innerHTML).toBe('Electric');
  });
});
