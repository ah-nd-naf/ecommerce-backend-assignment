const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    isAvailable: { type: Boolean, default: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);