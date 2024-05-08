const express = require('express');

require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

// Set up routes
app.get('/', (req, res) => {
    res.send('./public/index.html');
});

app.post('/submit', (req, res) => {
    res.redirect(`/view?name=${encodeURIComponent(req.body.name)}&sideLength=${encodeURIComponent(req.body.sideLength)}`);
});

app.get('/view', (req, res) => {
    const { name, sideLength } = req.query;
    res.send('./public/webshop.html');
});

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
