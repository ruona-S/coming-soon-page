const express = require('express');
const app = express();

const path = require('path');


const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.use(express.static('public'));


app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'index.html'))
})





app.listen(port, host, (req, res) => {
   console.log('Listening on port 3000')
})

