import React from 'react'
import "../css/contentImage.css";
import { useStateValue } from '../utils/StateProvider';

function ContentImage() {
    const [state,dispatch] = useStateValue()

    console.log("contentimage curEnv",state)

    return (
            <div className="imageContainer">
                
                <img className="envImage" src={state.curEnv.envImageURL} alt="" />
                
                <div className="imageOverlay">
                    <h1 className="envTitle">{state.curEnv.envName}</h1>
                </div>

            </div>
    )
}

export default ContentImage
