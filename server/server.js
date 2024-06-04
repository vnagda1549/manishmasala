const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://puniasatvirsp:Satvir5600@satvir.z1hrnzq.mongodb.net/?retryWrites=true';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Define API routes here

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
