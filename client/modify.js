import React from 'react'

const Modify = ({insertMeme}) => {
    return(
        <div id='modify'>
            <img class='gifs' src="tenor.gif"></img>
                <div id='insert'>
                    <form>
                        <div>
                            <label>Meme Name</label>
                            <input name='memename' placeholder='Enter Meme Name'></input>
                        </div>
                        <div>
                            <label>Meme Url</label>
                            <input name='memeurl' placeholder='Enter Meme URL'></input>
                        </div>
                        <div>
                            <label>Submitter Name</label>
                            <input name='username' placeholder='Enter Your Name'></input>
                        </div>
                        <button onClick={(ev)=>insertMeme(ev)}>SUBMIT</button>
                    </form>
                </div>
                <img class='gifs' src="dancing.gif"></img>
            </div>
    )
}

export default Modify