const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    type: { type: String, enum: ['income', 'expense'], required: true },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: function () {
            return this.type === 'expense';
        },
    },
}, {
    timestamps: true,
});

module.exports = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);
