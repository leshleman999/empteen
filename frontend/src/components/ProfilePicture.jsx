import React from 'react';
import '../css/ProfilePicture.css';
import { useStateValue } from '../utils/StateProvider';

export default function ProfilePicture() {
    const [state,dispatch] = useStateValue()

    return (
        <div className='profilePicture'>
            <img className="ppImage" src={state.user.image} alt='' />
        </div>
    )
}
