// Home.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';

jest.mock('axios');

test('renders Home component', async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const addButton = screen.getByText('Add Item');
  expect(addButton).toBeInTheDocument();
});

