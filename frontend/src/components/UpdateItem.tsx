// src/components/UpdateItem.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, TextField, Button } from '@mui/material';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
}

const UpdateItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      const response = await axios.get<Item>(`http://localhost:3000/items/${id}`);
      setItem(response.data);
    } catch (error) {
      console.error('Error fetching item:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem!,
      [name]: value,
    }));
  };

  const handleUpdateItem = async () => {
    try {
      await axios.put(`http://localhost:3000/items/${id}`, item);
      navigate('/');
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="sm">
      <h1>Update Item</h1>
      <form>
        <TextField
          label="Name"
          name="name"
          value={item.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={item.description}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={item.price}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleUpdateItem}>
          Update Item
        </Button>
        <Button variant="outlined" sx={{ mt: 2, ml: 2 }} onClick={() => navigate('/')}>
          Cancel
        </Button>
      </form>
    </Container>
  );
};

export default UpdateItem;
