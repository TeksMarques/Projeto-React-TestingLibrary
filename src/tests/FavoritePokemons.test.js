import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Testes do requisito 3', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found,'
 + 'caso a pessoa não tenha pokémons favoritos', () => {
    renderWithRouter(<FavoritePokemons />);
    const title = screen.getByText('No favorite pokemon found');
    expect(title).toBeInTheDocument();
  });
});
