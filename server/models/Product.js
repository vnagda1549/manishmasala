const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuantitySchema = new Schema({
    size: String,
    price: Number
});

const ProductSchema = new Schema({
    name: String,
    image: String,
    longDescription: String,
    shortDescription:String,
    quantities: [QuantitySchema]
});

module.exports = mongoose.model('Product', ProductSchema);
