const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegistroSchema = new Schema({

    "name": { type: String, required: true },
    "quantity": { type: Number, required: true },
    "user": { type: String, required: true }

})

module.exports = mongoose.model('Registro', RegistroSchema);