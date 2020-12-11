import React from 'react'

const MemeSingle = ({memes,selectedMemeId,returnHome}) => {
    const meme = memes.filter(meme=>meme.id===selectedMemeId)[0]
    console.log(meme)
    return(
        <div id='memesingle'>
            <div id='back'>
                <a href='#' onClick={()=>returnHome()}><button>BACK</button></a>
            </div>
            <div id='memelarge'>
                <h1>Name:<p>{meme.name}</p></h1>
                <img className='thumbnail' src={meme.memeUrl}></img>
                <h1>Submitted by:<p>{meme.user.name}</p></h1>
            </div>
        </div>
    )
}

export default MemeSingle