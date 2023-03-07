import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Card, Button, Container } from 'react-bootstrap';
const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <Container>
        <h1>Cart</h1>
        <Button onClick={() => dispatch({ type: 'removeAll' })}>Remove All</Button>
        <div className='cart'>
          {state.cart.map((item) => (
            <Card key={item.id} className='product'>
              <Card.Img variant='top' src={item.images[0]} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant='primary' onClick={() => dispatch({ type: 'removeFromCart', payload: item })}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Cart;
