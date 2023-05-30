import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Cookies from 'js-cookie';

function DishsListViewAll() {
  const [dishs, setDishs] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/v1/dishs/all/')
      .then((response) => {
        setDishs(response.data);
      })
      .catch((error) => {
        // Handle errors
      });

    const storedCartItems = Cookies.get('cartItems');
    if (storedCartItems) {
      try {
        setCartItems(JSON.parse(storedCartItems));
      } catch (error) {
        // Handle JSON parsing error
        console.error('Error parsing cart items:', error);
        setCartItems([]);
      }
    }
  }, []);

  const handleCartClick = (itemId) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.indexOf(itemId);
    if (itemIndex > -1) {
      updatedCartItems.splice(itemIndex, 1);
    } else {
      updatedCartItems.push(itemId);
    }
    setCartItems(updatedCartItems);
    Cookies.set('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div>
      <h1>All Dishes</h1>
      <style>
        {`
          /* CSS styles */

          .dish-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }

          .dish-item {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 3px solid #ccc;
            padding: 30px;
            margin: 40px;
            width: 300px;
            text-align: left;
            text-decoration: none;
            font-family: 'Open Sans', sans-serif;
            border-radius: 10px;
          }

          .dish-item:hover {
            text-decoration: none;
          }

          .dish-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
          }

          .dish-name {
            margin-top: 10px;
            font-size: 18px;
            font-weight: bold;
            color: black;
          }

          .dish-description {
            margin-top: 10px;
            font-size: 14px;
            color: black;
          }

          .dish-price {
            margin-top: 10px;
            font-size: 16px;
            color: #ff5722;
            font-weight: bold;
          }

          .shopping-cart-icon {
            position: absolute;
            bottom: 20px;
            right: 20px;
            font-size: 27px;
            color: 'black';
            cursor: pointer;
            transition: color 0.3s ease;
          }
        `}
      </style>
      <div className="dish-list">
        {dishs.map((dish) => (
          <div key={dish.id} className="dish-item">
            <Link to={`/dish/detail/${dish.id}`}>
              <img src={dish.image_url} alt={dish.name} className="dish-image" />
              <div>
                <h2 className="dish-name">{dish.name}</h2>
                <p className="dish-description">{dish.description}</p>
                <p className="dish-price">$ {dish.price}</p>
              </div>
            </Link>
            <FaShoppingCart
              className="shopping-cart-icon" onClick={() => handleCartClick(dish.id)}
              style={{ color: cartItems.includes(dish.id) ? 'red' : 'black' }}
              />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DishsListViewAll;
