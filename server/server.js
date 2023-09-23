// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const faker = require('faker');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/tinder-habilidades', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const personSchema = new mongoose.Schema({
  name: String,
  skills: [String],
});

const Person = mongoose.model('Person', personSchema);

// Ruta para crear 30 personas ficticias en la base de datos
app.get('/api/crear_personas', async (req, res) => {
  try {
    for (let i = 0; i < 30; i++) {
      const name = faker.name.findName();
      const skills = faker.random.words().split(' ');
      const person = new Person({ name, skills });
      await person.save();
    }
    res.json({ message: '30 personas creadas con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear personas' });
  }
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});


