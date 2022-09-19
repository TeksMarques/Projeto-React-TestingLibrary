import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Notfound from '../pages/NotFound';

describe('Testes do requisito 2', () => {
  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<Notfound />);
    const title = screen.getByRole('heading', {
      name: 'Page requested not found', level: 2 });
    expect(title).toBeInTheDocument();
  });
  it('O atributo src da imagem é https://media.giphy.com/...', () => {
    renderWithRouter(<Notfound />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
