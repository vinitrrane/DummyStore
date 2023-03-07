import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../CartContext';

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const [cartButton, setCartButton] = useState(false);
  const onClickHandler = () => {
    dispatch({
      type: 'addToCart',
      payload: product,
    });
    setCartButton(true);
  };

  return (
    <>
      <Card className='product'>
        <Card.Img variant='top' src={product.images[0]} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>&#8377; {product.price}</Card.Text>

          {cartButton ? (
            <Button variant='primary' disabled>
              Added
            </Button>
          ) : (
            <Button variant='primary' onClick={onClickHandler}>
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
