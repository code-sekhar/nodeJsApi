const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/Userrouter');

const app = express();
const port = 5000;

//Middleware
app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/api/users', userRoutes);


//Connect to DB
mongoose.connect('mongodb://localhost:27017/node-api')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection is open.');
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World',
        success: true
    });
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
