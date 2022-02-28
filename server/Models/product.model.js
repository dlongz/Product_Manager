const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A title is required!!!!'],
        minlength: [3, 'Min 3 characters Pelase.']
    },
    price: {
        type: String,
        required: [true, 'A price is required!!!! Nom Nom']
    },
    description: {
        type: String,
        required: [true, 'A description is required!!!'],
        minlength: [12, 'Minimum 12 characters por favor!!']
    }
}, {timestamps: true})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product