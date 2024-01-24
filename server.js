const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require('dotenv').config();

const port = 5001;
const app = express();

connectDb();
// This will help us to provide a parser which will help us to parse the data stream 
//that we receive from client to server side
app.use(express.json());
app.use('/api/contacts', require("./routes/contactRoutes"));
app.use('/api/users', require("./routes/userRoutes"));
app.use(errorHandler);


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});