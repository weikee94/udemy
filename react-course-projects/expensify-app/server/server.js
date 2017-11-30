const path = require('path');
const express = require('express');
const app = express();

const publicPath = path.join(__dirname, '..', 'public');

// customize server
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendfile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
    console.log('server is up!');
})