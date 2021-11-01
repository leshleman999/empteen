import React, { useContext } from 'react';
import '../css/ProfilePicture.css';
import { EmpTeenContext } from '../App'

export default function ProfilePicture() {
    const [user, setUser] = useContext(EmpTeenContext)
    return (
        <div className='profilePicture'>
            <img className="ppImage" src={user.image} alt='...' />
        </div>
    )
}
