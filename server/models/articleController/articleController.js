const Article = require('../models/Article');

// Controladores para CRUD de artículos

// Crear un nuevo artículo (ejemplo)
exports.createArticle = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const article = new Article({ title, description, price });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el artículo' });
  }
};

// Obtener todos los artículos (ejemplo)
exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los artículos' });
  }
};

// Obtener un artículo por ID (ejemplo)
exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Artículo no encontrado' });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el artículo' });
  }
};

// Actualizar un artículo por ID (ejemplo)
exports.updateArticle = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      { title, description, price },
      { new: true }
    );
    if (!article) {
      return res.status(404).json({ error: 'Artículo no encontrado' });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el artículo' });
  }
};

// Eliminar un artículo por ID (ejemplo)
exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndRemove(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Artículo no encontrado' });
    }
    res.json({ message: 'Artículo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el artículo' });
  }
};

