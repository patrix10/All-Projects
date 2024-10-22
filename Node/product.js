const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    skill: String,
    value: Number
});

module.exports = mongoose.model('products',ProductSchema)