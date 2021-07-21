//imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Variables
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
})

mongoose.connection.once('connected', () => console.log("connected to Mongoose, life is good!"));

// Routes
app.get('/', (req, res) => {
    res.send('<h1>To the Mooooon<h1>')
});

app.listen(PORT, () => {
    console.log('Hello, I am listening on PORT', PORT)
});