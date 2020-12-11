const Sequelize = require('sequelize')
const {STRING} = Sequelize
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dealers_choice_react')
const memes = require('./memes')


const Meme = db.define('meme',{
    name: {
        type:STRING,
        allowNull:false,
        validate:{
            notEmpty:false
        }
    },
    memeUrl: STRING
})

const User = db.define('user',{
    name:STRING
})

Meme.belongsTo(User)
User.hasMany(Meme)


const syncAndSeed = async() => {
const users = await Promise.all(
    ['moe','lucy','larry'].map(name=>User.create({name}))
    );

const memeList = await Promise.all(
    memes.map(meme=>Meme.create({
            name:meme.name,
            memeUrl:meme.memeUrl,
            userId:Math.floor(Math.random()*users.length+1)
        }))
    );    


}

module.exports = {
    db,
    syncAndSeed,
    model:{
        User,
        Meme
    }
}