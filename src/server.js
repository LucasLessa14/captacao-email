require('dotenv').config();

const port = process.env.PORT || 3202;
const routes = require('./routes');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(port, () => console.log(`BACKEND is running on port ${port}`));