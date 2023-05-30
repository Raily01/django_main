import React, { useState } from 'react';
import axios from 'axios';

function DishCreateView() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image_url, setImage] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Создание объекта данных для отправки на сервер
    const formData = {
      name: name,
      description: description,
      price: price,
      image_url: image_url,
      category: category,
    };

    // Отправка данных на сервер
    axios
      .post('http://localhost:8000/api/v1/dishs/dish/create/', formData)
      .then((response) => {
        // Обработка успешного ответа
        console.log('Dish created successfully!');
        // Очистка полей формы
        setName('');
        setDescription('');
        setPrice('');
      })
      .catch((error) => {
        // Обработка ошибок
        console.error('Error creating dish:', error);
      });
  };

  return (
    <div>
      <h2>Create Dish</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image_url">Image URL:</label>
          <input
            type="text"
            id="image_url"
            value={image_url}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default DishCreateView;
