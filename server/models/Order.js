const mongoose = require('mongoose'):

const { Schema } = mongoose:

const orderSchema = Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;