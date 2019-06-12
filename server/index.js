// const Joi = require('joi');
const express = require('express');
const app = express();
const cars = require('./routes/cars')

app.use(express.json());
app.use('/api/cars', cars);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));