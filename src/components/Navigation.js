import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../CartContext';
const Navigation = () => {
  const { state } = useContext(CartContext);
  const totalPrice = state.cart.reduce((a, b) => a + b.price, 0);

  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <NavLink to='/'>Dummy Store</NavLink>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'></Nav>
            <Nav>
              <NavLink to='/cart'>
                <span className='cartItems'> Cart {state.count}</span>&nbsp;
                <span className='totalPrice'>Total : &#8377; {totalPrice}/-</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
