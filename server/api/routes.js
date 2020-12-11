const express = require('express')
const router = express.Router();
const {model:{User,Meme}}=require('../db')


router.get('/memes',async(req,res,next)=>{
    try{
        res.send(await Meme.findAll(
            {
            include:[User],
            order:[
            ['id','DESC']
            ]
            }))
    }catch(ex){
        next(ex)
    }
})

router.post('/',async(req,res,next)=>{
    try{
        const newUser = await User.create({name:req.body.username})
        const newMeme = await Meme.create({
            name:req.body.memename,
            memeUrl:req.body.memeurl})
        newMeme.userId = newUser.id
        await newMeme.save()
        const newentry = await Meme.findAll({
            where:{
                userId:newUser.id
            },
            include:[User]
        })
        res.send(newentry);
    }catch(ex){
        next(ex)
    }
})

router.delete('/:id',async(req,res,next)=>{
    try{
       const meme = await Meme.findByPk(req.params.id)
       await meme.destroy();
       res.send(meme)
    }catch(ex){
        next(ex)
    }
})


module.exports = {
    router
}