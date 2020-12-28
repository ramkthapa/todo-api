const http = require('http');
const express = require('express');
const port = process.env.PORT || 3000;
const index = express();
const appRoutes = require('./routes/todoRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


mongoose.connect('mongodb://localhost/meanDb', {useMongoClient: true});

index.use(cors());
index.use(bodyParser.urlencoded({ extended: true }));
index.use(bodyParser.json());
index.use('/', appRoutes);
http.createServer(index).listen(port);

console.log("backend running on port:", port);
