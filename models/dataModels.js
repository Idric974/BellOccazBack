const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
  infoVehicule: { type: String, required: true },
  infoCyndree: { type: String, required: false },
  prixVehicule: { type: String, required: true },
  anneeVehicule: { type: String, required: false },
});

module.exports = mongoose.model('Data', dataSchema);
