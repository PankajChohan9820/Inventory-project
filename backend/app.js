// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

//Test the our app
app.get('/', async (req, res) => {
    try {
      console.log('Hi')
    } catch (error) {
      res.status(500).json({ error: 'Error creating item' });
    }
  });


// Create an item
app.post('/items', async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newItem = await pool.query(
      'INSERT INTO items (name, description, price) VALUES ($1, $2, $3) RETURNING *',
      [name, description, price]
    );
    res.json(newItem.rows[0]);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error creating item',error });
  }
});

// Get all items
app.get('/items', async (req, res) => {
  try {
    const allItems = await pool.query('SELECT * FROM items');
    res.json(allItems.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving items' });
  }
});

// Get a single item by ID
app.get('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const item = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
    res.json(item.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving item' });
  }
});

// Update an item by ID
app.put('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const updatedItem = await pool.query(
      'UPDATE items SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *',
      [name, description, price, id]
    );
    res.json(updatedItem.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error updating item' });
  }
});

// Delete an item by ID
app.delete('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM items WHERE id = $1', [id]);
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting item' });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
