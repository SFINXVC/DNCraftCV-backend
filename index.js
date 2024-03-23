const express = require('express');
const cors = require('cors');
const app = express();

const addr = '0.0.0.0';
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
    res.send(
        "<h1>Hello World</h1>"
    );
})

app.listen(port, addr, () => {
    console.log(`server is up and currently running at ${addr}:${port}`);
})