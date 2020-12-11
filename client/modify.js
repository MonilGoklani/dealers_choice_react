import React from 'react'

const Modify = ({insertMeme}) => {
    return(
        <div id='modify'>
                <div id='insert'>
                    <form>
                        <div>
                            <label>Meme Name</label>
                            <input name='memename'></input>
                        </div>
                        <div>
                            <label>Meme Url</label>
                            <input name='memeurl'></input>
                        </div>
                        <div>
                            <label>Submitter Name</label>
                            <input name='username'></input>
                        </div>
                        <button onClick={(ev)=>insertMeme(ev)}>SUBMIT</button>
                    </form>
                </div>
            </div>
    )
}

export default Modify