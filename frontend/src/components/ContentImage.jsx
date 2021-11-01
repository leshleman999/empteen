import React, {useContext} from 'react'
import "../css/contentImage.css";
import { EmpTeenCurEnv } from '../App' 

function ContentImage() {
    const [curEnv, setCurEnv] = useContext(EmpTeenCurEnv)
    return (
            <div className="imageContainer">
                <img src={curEnv.envImageURL} alt="" />
                <div className="imageOverlay">
                    <h1>{curEnv.envName}</h1>
                </div>

            </div>
    )
}

export default ContentImage
