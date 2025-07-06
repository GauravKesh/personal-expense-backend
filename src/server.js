const mongoose = require('mongoose');
const dotenvFlow = require('dotenv-flow');
const app = require('./app');






// Load env variables
dotenvFlow.config();

const PORT = process.env.PORT || 9090;
const MONGODB_URI =
    process.env.MONGODB_URI ||
    '';

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected successfully');
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });