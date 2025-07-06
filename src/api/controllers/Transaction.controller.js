const mongoose = require('mongoose')

const Transaction = require('../../models/Transaction.model');


const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({})
            .populate('category')
            .sort({ createdAt: -1 });

        res.json(transactions);
    } catch (err) {
        console.error('Error fetching transactions:', err);
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
};


const createTransaction = async (req, res) => {
    try {
        const { amount, description, date, type, category } = req.body;

        if (!amount || !description || !type || (type === 'expense' && !category)) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const transaction = new Transaction({
            amount,
            description,
            date: date || new Date(),
            type,
            category: type === 'expense' ? category : null,
        });

        await transaction.save();

        if (type === 'expense') {
            await transaction.populate('category');
        }

        res.status(201).json(transaction);
    } catch (err) {
        console.error('Error creating transaction:', err);
        res.status(500).json({ error: 'Failed to create transaction' });
    }
};


const updateTransaction = async (req, res) => {
    try {
        const updateData = req.body;
        console.log(updateData);

        if (updateData.type) {
            if (!['income', 'expense'].includes(updateData.type)) {
                return res.status(400).json({ error: 'Invalid transaction type' });
            }

            if (updateData.type === 'expense' && !updateData.category) {
                return res.status(400).json({ error: 'Category is required for expense transactions' });
            }

            // If type is income, remove category to avoid casting error
            if (updateData.type === 'income') {
                delete updateData.category;
            }
        }

        const objectId = new mongoose.Types.ObjectId(req.params.id);

        const updatedTransaction = await Transaction.findByIdAndUpdate(
            objectId,
            updateData,
            { new: true }
        ).populate('category');

        res.json(updatedTransaction);
    } catch (err) {
        console.error('Error updating transaction:', err);
        res.status(500).json({ error: 'Failed to update transaction' });
    }
};
  

const deleteTransaction = async (req, res) => {
    try {
        const deleted = await Transaction.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: 'Transaction not found' });
        }

        res.json({ message: 'Transaction deleted successfully' });
    } catch (err) {
        console.error('Error deleting transaction:', err);
        res.status(500).json({ error: 'Failed to delete transaction' });
    }
};

module.exports = {
    getTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
};
