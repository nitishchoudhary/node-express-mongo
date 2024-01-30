require('dotenv').config();
const { error } = require('console');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoute');
const app = express();

const PORT = process.env.PORT_NUMBER || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(bodyParser.json());
//routes
app.use('/api/products',productRoutes);

mongoose.
connect(MONGO_URL)
.then(() => {
    console.log('Database connected successfully!');
    app.listen(PORT, () => {
        console.log(`Node api running at port ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});