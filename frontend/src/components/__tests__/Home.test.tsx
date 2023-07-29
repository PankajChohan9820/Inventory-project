// src/components/__tests__/Home.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';
import mockAxios from '../../mockAxios';

test('renders Home component', () => {
  const { getByText } = render(<Home />);
  const addButton = getByText('Add Item');
  expect(addButton).toBeInTheDocument();
});


test('renders cards with correct data', async () => {
    const mockData = [
      { id: 1, name: 'Item 1', description: 'Description 1', price: 10 },
      { id: 2, name: 'Item 2', description: 'Description 2', price: 20 },
    ];
  
    // Mock API response
    mockAxios.onGet('http://localhost:3000/items').reply(200, mockData);
  
    const { findByText } = render(<Home />);
    const item1 = await findByText('Item 1');
    const item2 = await findByText('Item 2');
  
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });