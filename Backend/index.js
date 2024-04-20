const express = require('express');
const app = express();

const bodyParser= require('body-parser');
const cors = require('cors');
const PORT = 8000;
const cookieParser = require('cookie-parser')

app.use(bodyParser.json());
const allowedOrigins = ['http://localhost:3000'];

app.use(
    cors({
    origin: function(orgin,callack){
        if(!orgin || allowedOrigins.includes(origin)){
            callback(null,true);
        }else{
            callback(new Error('Not allowed by CORS'));
        }
        },
        credentials: true,
    })
);
app.use(cookieParser());

app.get('/', (req,res)=>{
    res.json({message:'Th Api is working'});

});

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});
