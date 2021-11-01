import React from 'react'
import '../css/backdrop.css'

function Backdrop(props) {
    return (
        <div className="backdropContainer" onClick={props.onClick}>
            {/* <h1>Backdrop</h1> */}
        </div>
    )
}

export default Backdrop
