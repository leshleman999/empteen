import React, { useState, useContext } from 'react';
import '../css/Header.css';
import ProfileDropDown from './ProfileDropDown';
import ProfilePicture from './ProfilePicture';
import { EmpTeenContext } from '../App'

function Header() {
    const [user, setUser] = useContext(EmpTeenContext)

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
                <p className="userName">Welcome {user.displayname} </p>
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