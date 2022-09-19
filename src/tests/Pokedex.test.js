import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testes do requisito 5', () => {
  it('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', { name: 'All' });
    userEvent.click(buttonAll);
  });
  it('Os botões de filtragem por tipo possuem o'
  + 'data-testid=pokemon-type-button exceto o botão All', () => {
    renderWithRouter(<App />);
    const buttonId = screen.getAllByTestId('pokemon-type-button');
    const pokemonTypes = 7;
    expect(buttonId).toHaveLength(pokemonTypes);
  });
  it('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);
    const electricButton = screen.getByRole('button', { name: /electric/i });
    expect(electricButton).toBeInTheDocument();
    userEvent.click(electricButton);

    const fireButton = screen.getByRole('button', { name: /fire/i });
    expect(fireButton).toBeInTheDocument();
    userEvent.click(fireButton);

    const bugButton = screen.getByRole('button', { name: /bug/i });
    expect(bugButton).toBeInTheDocument();
    userEvent.click(bugButton);

    const poisonButton = screen.getByRole('button', { name: /poison/i });
    expect(poisonButton).toBeInTheDocument();
    userEvent.click(poisonButton);

    const psychicButton = screen.getByRole('button', { name: /psychic/i });
    expect(psychicButton).toBeInTheDocument();
    userEvent.click(psychicButton);

    const normalButton = screen.getByRole('button', { name: /normal/i });
    expect(normalButton).toBeInTheDocument();
    userEvent.click(normalButton);

    const dragonButton = screen.getByRole('button', { name: /dragon/i });
    expect(dragonButton).toBeInTheDocument();
    userEvent.click(dragonButton);
  });
});
