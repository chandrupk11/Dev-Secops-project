const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('🚀 Secure DevSecOps Pipeline is Running Successfully!');
});

app.get('/health', (req, res) => {
    res.json({ status: "OK", message: "Healthy" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});