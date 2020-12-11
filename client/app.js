import React from 'react'
import Title from './title'
import Modify from './modify'
import MemeBar from './memebar'
import MemeSingle from './memesingle'
import axios from 'axios'

class App extends React.Component {
    constructor(){
        super()
        this.state={
            memes:[],
            selectedMemeId:0
        }
        this.selectedMeme = this.selectedMeme.bind(this)
        this.insertMeme = this.insertMeme.bind(this)
        this.returnHome = this.returnHome.bind(this)
        this.deleteMeme = this.deleteMeme.bind(this)
    }

async componentDidMount(){
    const memes = (await axios.get('/memes')).data
    this.setState({
        memes:memes
    })
}

selectedMeme(id){
    this.setState({
        selectedMemeId:id
    })
}

async insertMeme(ev){
    ev.preventDefault()
    const newMeme = {
        memename:ev.target.parentElement.memename.value,
        memeurl:ev.target.parentElement.memeurl.value,
        username:ev.target.parentElement.username.value
    }
    const newEntry = (await axios.post('/',newMeme)).data
    this.setState({
        memes:[...this.state.memes,...newEntry]
    })
}

async deleteMeme(id){
   await axios.delete(`/${id}`);
   console.log(this.state.memes)
   console.log(this.state.memes.filter(elem=>elem.id!==id))
   this.setState({
       memes:this.state.memes.filter(elem=>elem.id!==id)
   })
}

returnHome(){
    this.setState({
        selectedMemeId:0
    })
}


    render(){
       const {memes,selectedMemeId} = this.state
       const {selectedMeme,insertMeme,returnHome,deleteMeme} = this
        return(
            <div id='main'>
            <Title/>
            {!selectedMemeId?<Modify insertMeme={insertMeme}/>:null}
            {!!selectedMemeId?<MemeSingle memes={memes} selectedMemeId={selectedMemeId} returnHome={returnHome}/>:<MemeBar memes={memes} selectedMeme={selectedMeme} deleteMeme={deleteMeme}/>}
            </div> 
        )
    }
}

export default App