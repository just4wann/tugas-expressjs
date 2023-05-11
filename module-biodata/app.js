require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/biodata', function(req, res) {
    const name = req.query.name;
    const placeOfBirth = req.query["tempat-lahir"];
    const dateOfBirth = req.query["tanggal-lahir"];
    const address = req.query.alamat;

    res.send({
        'nama' : name,
        'tempat-lahir' : placeOfBirth,
        'tanggal-lahir' : dateOfBirth,
        'alamat' : address
    })
})

app.use(express.json());
app.use(express.urlencoded( { 
    extended: true 
}));

app.post('/biodata', function(req, res) {
    const name = req.body.name;
    const placeOfBirth = req.body["tempat-lahir"];
    const dateOfBirth = req.body["tanggal-lahir"];
    const address = req.body.alamat;

    res.send({
        'nama' : name,
        'tempat-lahir' : placeOfBirth,
        'tanggal-lahir' : dateOfBirth,
        'alamat' : address
    })
})

app.listen(port);
console.log('Server started at http://localhost:' + port);