// __mocks__/axios.js
const mockAxios = jest.genMockFromModule('axios');

// Mock the implementation for the get function
mockAxios.get = jest.fn((url) => {
  // Customize the mocked response here
  if (url === 'http://localhost:3000/items') {
    return Promise.resolve({
      data: [
        { id: 1, name: 'Item 1', description: 'Description 1', price: 10 },
        { id: 2, name: 'Item 2', description: 'Description 2', price: 20 },
        // Add more mock data as needed
      ],
    });
  }

  return Promise.reject(new Error('Mocked Axios request failed'));
});

export default mockAxios;
