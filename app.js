const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/home', (req, res) => {
    res.json({
    message: "Welcome to your dashboard!",
    data: ["Project A", "Project B"]
  });
})

app.listen(PORT, () => {
    app.listen(PORT, () => console.log(`Server on port ${PORT}`));
});