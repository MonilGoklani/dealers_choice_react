import React from 'react'

const MemeSingle = ({memes,selectedMemeId,returnHome}) => {
    const meme = memes.filter(meme=>meme.id===selectedMemeId)[0]
    return(
        <div id='memesingle'>
            <div id='back'>
                <a onClick={()=>returnHome()}><button>BACK</button></a>
            </div>
            <div id='memelarge'>
                <h1>{meme.name}</h1>
                <img src={meme.memeUrl}></img>
                <h1 id='submitter'>Submitted by: {meme.user.name}</h1>
            </div>
        </div>
    )
}

export default MemeSingle