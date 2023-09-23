const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
  total: { type: Number, required: true },
});

module.exports = mongoose.model('Ticket', ticketSchema);
