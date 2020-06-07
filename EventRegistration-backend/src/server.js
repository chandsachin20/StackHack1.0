const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}


try{
    mongoose.connect(process.env.MONGO_DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("mongo db connected successfully");
}catch(err){
    console.log(err);
}


app.use(routes);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}` );
})