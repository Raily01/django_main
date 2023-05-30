import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = Cookies.get('cartItems');
    if (storedCartItems) {
      try {
        const itemIds = JSON.parse(storedCartItems);
        Promise.all(itemIds.map(fetchItemDetails))
          .then((items) => setCartItems(items))
          .catch((error) => console.error('Error fetching item details:', error));
      } catch (error) {
        console.error('Error parsing cart items:', error);
      }
    }
  }, []);

  const fetchItemDetails = async (itemId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/v1/dishs/dish/detail/${itemId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching item with ID ${itemId}:`, error);
      return null;
    }
  };

  return (
    <div>
      <h1>Cart</h1>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

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

          .pay-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 30px;
            background-color: blue;
            color: white;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        `}
      </style>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="dish-list">
          {cartItems.map((dish) => (
            <div key={dish.id} className="dish-item">
              <img src={dish.image_url} alt={dish.name} className="dish-image" />
              <div>
                <h2 className="dish-name">{dish.name}</h2>
                <p className="dish-description">{dish.description}</p>
                <p className="dish-price">$ {dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to="/payment" className="pay-button">
        Pay
      </Link>
    </div>
  );
}

export default CartPage;
