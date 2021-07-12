const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsoSchema = new Schema({

    "name": { type: String, required: true },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    "user": { type: String, required: true },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    "quantity": { type: Number, required: true },
    "createdDate": { type: Date, default: Date.now }

})

module.exports = mongoose.model('Uso', UsoSchema);