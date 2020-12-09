const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const port = process.env.port || 80
app.listen(port, () => console.log(`listening at http://localhost:${port}`))