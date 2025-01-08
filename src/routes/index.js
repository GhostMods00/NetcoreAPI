const express = require('express');
const router = express.Router();

// Import routes
const apiRoutes = require('./api');

// Add routes
router.use('/api', apiRoutes);

// Catch-all route
router.use('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

module.exports = router;