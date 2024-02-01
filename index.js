require('dotenv').config();
const { error } = require('console');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT_NUMBER || 3000;
const MONGO_URL = process.env.MONGO_URL;
const FRONTEND = process.env.FRONTEND;

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());



// app.get('/', (req, res) => {
//     throw new Error('fake error');
// });

//routes
app.use('/api/products',productRoutes);

app.use(errorMiddleware);

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