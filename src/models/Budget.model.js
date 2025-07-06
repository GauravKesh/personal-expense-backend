const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    month: {
        type: Number,
        required: true,
        min: 1,
        max: 12,
    },
    year: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

// Unique budget constraint
BudgetSchema.index({ category: 1, month: 1, year: 1 }, { unique: true });

module.exports = mongoose.models.Budget || mongoose.model('Budget', BudgetSchema);
