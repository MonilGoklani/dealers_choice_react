import React from 'react'

const MemeBar = ({memes,selectedMeme,deleteMeme}) => {
    return(
        <div id='memebar'>
            {memes.map(meme=>{
                return(
                    <a title="click to view" key={meme.id}><img onClick = {()=>selectedMeme(meme.id)} className='thumbnail' src={meme.memeUrl}></img><p>{meme.name}<button onClick={()=>deleteMeme(meme.id)}>X</button></p></a>
                )
            })}
         </div>
    )
}

export default MemeBar