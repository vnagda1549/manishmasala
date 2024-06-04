const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://manishmasalafoods:CcAIiXrQ6BFUeEe8@manishmasala.zrbufhp.mongodb.net/';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Define API routes here

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
