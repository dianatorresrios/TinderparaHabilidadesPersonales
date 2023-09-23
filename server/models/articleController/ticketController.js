const Ticket = require('../models/Ticket');
const Article = require('../models/Article');

// Crear un nuevo ticket con artículos relacionados
exports.createTicket = async (req, res) => {
  try {
    const { articles, total } = req.body;
    const ticket = new Ticket({ articles, total });

    // Guardar el ticket
    await ticket.save();

    // Actualizar los artículos con la referencia al ticket
    await Article.updateMany(
      { _id: { $in: articles } },
      { $set: { ticket: ticket._id } }
    );

    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el ticket' });
  }
};
