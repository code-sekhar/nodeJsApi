const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Connect to DB
mongoose.connect('mongodb://localhost:27017/node-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
});

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World',
        success: true
    });
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
