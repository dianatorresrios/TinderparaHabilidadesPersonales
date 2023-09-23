const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// Rutas CRUD para artículos
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los artículos' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const article = new Article({ title, description, price });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el artículo' });
  }
});

// Otras rutas CRUD (actualizar y eliminar) pueden ser agregadas aquí

module.exports = router;
