const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL,{
    dbName: process.env.DB_NAME}).then(
        ()=>{
            consolwe.log('Connected to database');
        }
        ).catch((err)=>{
            console.log('Eroor connect to database' +err)
})