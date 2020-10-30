require('dotenv').config();

const PORT = process.env.PORT || 3202;
const HOST = process.env.HOST || '0.0.0.0';

const knex = require('./database');

const routes = require('./routes');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(PORT, HOST, () => console.log(`BACKEND is running on port ${PORT}`));