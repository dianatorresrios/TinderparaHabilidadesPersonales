import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('/api/articles')
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los artículos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Artículos</h1>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>Precio: ${article.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
