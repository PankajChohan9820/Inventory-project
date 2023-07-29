// src/components/Home.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Card, CardContent, Button, Typography, Grid, Grow } from '@mui/material';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get<Item[]>('http://localhost:3000/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleDeleteItem = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/items/${id}`);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Grow in={true} timeout={500}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography>{item.description}</Typography>
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    Price: ${item.price}
                  </Typography>
                  <Button variant="outlined" sx={{ mt: 2 }} component={Link} to={`/update/${item.id}`}>
                    Update
                  </Button>
                  <Button variant="outlined" sx={{ mt: 2, ml: 2 }} onClick={() => handleDeleteItem(item.id)}>
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" sx={{ mt: 2 }} component={Link} to="/add">
        Add Item
      </Button>
    </Container>
  );
};

export default Home;
