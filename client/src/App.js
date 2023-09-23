const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const articleRoutes = require('./routes/articleRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();

mongoose.connect('mongodb://localhost/myapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión a MongoDB establecida');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });

app.use(bodyParser.json());
app.use('/api/articles', articleRoutes);
app.use('/api/tickets', ticketRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor API escuchando en el puerto ${port}`);
});
