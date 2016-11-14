import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());

app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
    res.json([
        { id: 1, "fistName": "Roberto", "lastName": "Za", "email": "bob@gmail.com"},
        { id: 2, "fistName": "Guglielmo", "lastName": "Alberto", "email": "bob@gmail.com"},
        { id: 3, "fistName": "Daniela", "lastName": "Foschieri", "email": "bob@gmail.com"},
        { id: 4, "fistName": "Eugenio", "lastName": "Smith", "email": "bob@gmail.com"},
        { id: 5, "fistName": "Vanessa", "lastName": "Vivolo", "email": "bob@gmail.com"}      
    ]);
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
})



