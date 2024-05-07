const mongoose = require('mongoose');


const WishlistItemSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', 
        required: true
    },
});

const WishlistItem = mongoose.model('WishlistItem', WishlistItemSchema);

module.exports = WishlistItem;
