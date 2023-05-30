import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DishsDetailView({ match }) {
  const [dish, setDish] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const { pk } = useParams();

  useEffect(() => {
    // Загрузка данных о блюде с сервера
    axios
      .get(`http://localhost:8000/api/v1/dishs/dish/detail/${pk}`)
      .then((response) => {
        // Обработка успешного ответа
        setDish(response.data);
        setName(response.data.name);
        setDescription(response.data.description);
        setPrice(response.data.price);
        setImageUrl(response.data.image_url);
        setCategory(response.data.category);
      })
      .catch((error) => {
        // Обработка ошибок
        console.error('Error fetching dish:', error);
      });
  }, [pk]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Создание объекта данных для отправки на сервер
    const formData = {
      name: name,
      description: description,
      price: price,
      image_url: imageUrl,
      category: category,
    };

    // Отправка данных на сервер для обновления блюда
    axios
      .put(`http://localhost:8000/api/v1/dishs/dish/detail/${pk}`, formData)
      .then((response) => {
        // Обработка успешного ответа
        console.log('Dish updated successfully!');
        // Обновление состояния блюда
        setDish(response.data);
        setName(response.data.name);
        setDescription(response.data.description);
        setPrice(response.data.price);
        setImageUrl(response.data.image_url);
        setCategory(response.data.category);
      })
      .catch((error) => {
        // Обработка ошибок
        console.error('Error updating dish:', error);
      });
  };

  if (!dish) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dish Detail</h2>
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
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default DishsDetailView;
