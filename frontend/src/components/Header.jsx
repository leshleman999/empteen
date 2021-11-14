import React, { useState} from 'react';
import '../css/Header.css';
import ProfileDropDown from './ProfileDropDown';
import ProfilePicture from './ProfilePicture';
import { useStateValue } from '../utils/StateProvider';


function Header() {
    const [state,dispatch] = useStateValue()

    // console.log("user",state.user)

    const [dropDownOff, setDropDownOff] = useState(false);
    const settingHandler = ()=>{
        setDropDownOff(true);
    }

    const settingOffHandler = ()=>{
        setDropDownOff(false);
    }

    const logOut = ()=>{
        window.location.href = '/';     
        localStorage.clear();
    }

    
    return (
        <div className='headerContainer'>
            <div className='headerGreetings'>
                <p className="userName">Welcome {state.user.displayname} </p>
                <p className='logOutBtn' onClick={logOut}>Logout</p>
            </div>
           
            <div className='headerProfilePic' onClick={settingHandler} onDoubleClick={settingOffHandler}>
                 <ProfilePicture />

                     { dropDownOff ? <ProfileDropDown/> : false }
                
            </div> 

    </div>
    )
}

export default Header