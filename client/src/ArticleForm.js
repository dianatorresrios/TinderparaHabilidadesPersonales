import React, { useState } from 'react';
import axios from 'axios';

function ArticleForm() {
  const [articleData, setArticleData] = useState({
    title: '',
    description: '',
    price: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setArticleData({ ...articleData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/articles', articleData)
      .then((response) => {
        console.log('Artículo creado:', response.data);
        // Actualizar la lista de artículos aquí si es necesario
      })
      .catch((error) => {
        console.error('Error al crear el artículo:', error);
      });
  };

  return (
    <div>
      <h1>Crear Nuevo Artículo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={articleData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={articleData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={articleData.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Guardar Artículo</button>
      </form>
    </div>
  );
}

export default ArticleForm;

