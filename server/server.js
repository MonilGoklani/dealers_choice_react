const {db,syncAndSeed,meme1,moe} = require('./db');
const express = require('express');
const app = express();
const {router} = require('./api/routes');
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/',router)
app.use(express.static(path.join(__dirname,'../public')))
app.use('/',(req,res,next)=>res.sendFile(path.join(__dirname,'../client/index.html')))


const init = async()=> {
    try{
        await db.sync({force:true});
        await syncAndSeed();
        const port = process.env.PORT || 3000
        app.listen(port,()=>console.log(`listening on port: ${port}`))
    }catch(ex){
        console.log(ex)
    }
}

init()