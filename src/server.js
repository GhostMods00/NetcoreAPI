const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Start server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}!`);
    });
});