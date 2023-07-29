// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';
import './App.css'; // Import the CSS file

const App: React.FC = () => {
  return (
    <Router>
      <div className="container"> {/* Add a container class to apply styles */}
      <h1 className='header'>Item Inventory</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/update/:id" element={<UpdateItem />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
