import React, { useReducer, useState } from 'react';

import './App.css';
import Main from '../src/components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import { CartContext } from '../src/CartContext';
import Navigation from './components/Navigation';

const reducer = (state, action) => {
  switch (action.type) {
    case 'addToCart':
      return {
        count: state.count + 1,
        cart: [...state.cart, action.payload],
      };

    case 'removeFromCart':
      return {
        count: state.count - 1,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case 'removeAll':
      return {
        count: 0,
        cart: [],
      };

    default:
      return state;
  }
};
function App() {
  const initial = {
    count: 0,
    cart: [],
  };
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <div className='App'>
        <Router>
          <Navigation />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/main' element={<Main />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </div>
    </CartContext.Provider>
  );
}

export default App;
