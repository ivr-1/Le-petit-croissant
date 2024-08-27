import React, { useState } from 'react';
import Hero from './building-blocks/hero';
import HeroImage from '../Assets/heroImages/hero-order.png'
import './order.css';
import OrderItem from './building-blocks/order-item';
import FoodCart from './building-blocks/foodcart';
import MenuData from './building-blocks/foodmenudata';

function Order() {
  const headerText = (
    <header>
      Delivery
    </header>
  );

  const heroTagline = (
    <div>
      <p>Fresh from our kitchen</p>
    </div>
  );

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemName) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item =>
        item.name === itemName
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return updatedCart.filter(item => item.quantity > 0);
    });
  };

  const getItemQuantity = (itemName) => {
    const item = cart.find(cartItem => cartItem.name === itemName);
    return item ? item.quantity : 0;
  };

  return (
    <div className="order-section">
      <Hero
        headerText={headerText}
        headerTagline={heroTagline}
        heroImage={HeroImage}
      />
      <div className="order-container">
        {Object.entries(MenuData).map(([category, items]) => (
          <div key={category}>
            <h2>{category}</h2>
            <div className='items'>
              {items.map((item) => (
                <OrderItem
                  key={item.name}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  itemName={item.name}
                  itemPrice={Number(item.price).toFixed(2)}
                  itemText={item.description}
                  itemImage={item.imgid}
                  itemImageAlt={item.imgalt}
                  quantity={getItemQuantity(item.name)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <FoodCart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} setCart={setCart} />
    </div>
  );
}

export default Order;