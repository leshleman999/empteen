import React, {useState} from 'react'

function ToggleButton() {

    const [isActive, setIsActive] = useState(false);
    
    const handleToggle = () => {
      setIsActive(!isActive)
    };

    return (
       <div className="container">
            <div className='toggle-btn' id={isActive ? "active" : null}
                onClick={handleToggle} >
                    
                <div className="inner-circle">
                    
                </div>
            </div>
        </div> 
    )
}

export default ToggleButton
