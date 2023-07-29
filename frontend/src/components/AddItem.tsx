// src/components/AddItem.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Container, TextField, Button } from '@mui/material';

const AddItem: React.FC = () => {
  const [item, setItem] = useState({
    name: '',
    description: '',
    price: 0,
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleAddItem = async () => {
    try {
      await axios.post('http://localhost:3000/items', item);
      navigate('/');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <h1>Add Item</h1>
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
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleAddItem}>
          Add Item
        </Button>
        <Button variant="outlined" sx={{ mt: 2, ml: 2 }} component={Link} to="/">
          Cancel
        </Button>
      </form>
    </Container>
  );
};

export default AddItem;
