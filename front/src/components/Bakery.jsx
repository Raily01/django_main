import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DishsListView() {
  const [dishs, setDishs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/dishs/all/')
      .then((response) => {
        setDishs(response.data);
      })
      .catch((error) => {
        // Обработка ошибок
      });
  }, []);

  return (
    <div>
      {/* Вывод списка блюд */}
    </div>
  );
}


export default DishsListView;