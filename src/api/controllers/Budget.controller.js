const Budget = require('../../models/Budget.model');

const getBudgets = async (req, res) => {
    try {
        const budgets = await Budget.find({})
            .populate('category')
            .sort({ year: -1, month: -1 });

        res.json(budgets);
    } catch (err) {
        console.error('Error fetching budgets:', err);
        res.status(500).json({ error: 'Failed to fetch budgets' });
    }
};


const createBudget = async (req, res) => {
    try {
        const { category, amount, month, year } = req.body;

        if (!category || !amount || !month || !year) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const budget = new Budget({ category, amount, month, year });
        await budget.save();
        await budget.populate('category');

        res.status(201).json(budget);
    } catch (err) {
        console.error('Error creating budget:', err);
        res.status(500).json({ error: 'Failed to create budget' });
    }
};


const updateBudget = async (req, res) => {
    try {
        const { amount } = req.body;

        if (!amount) {
            return res.status(400).json({ error: 'Amount is required' });
        }

        const updatedBudget = await Budget.findByIdAndUpdate(
            req.params.id,
            { amount },
            { new: true }
        ).populate('category');

        if (!updatedBudget) {
            return res.status(404).json({ error: 'Budget not found' });
        }

        res.json(updatedBudget);
    } catch (err) {
        console.error('Error updating budget:', err);
        res.status(500).json({ error: 'Failed to update budget' });
    }
};


const deleteBudget = async (req, res) => {
    try {
        const deletedBudget = await Budget.findByIdAndDelete(req.params.id);

        if (!deletedBudget) {
            return res.status(404).json({ error: 'Budget not found' });
        }

        res.json({ message: 'Budget deleted successfully' });
    } catch (err) {
        console.error('Error deleting budget:', err);
        res.status(500).json({ error: 'Failed to delete budget' });
    }
};

module.exports = {
    getBudgets,
    createBudget,
    updateBudget,
    deleteBudget,
};
