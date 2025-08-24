const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    return res.json({
        message: "Hey, Conternerized NodeJS Application is running"
    });
});

// Only start server if run directly, not when imported for tests
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app; // Export app for testing