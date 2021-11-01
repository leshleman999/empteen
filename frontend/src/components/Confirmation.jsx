import React, { useState, useContext } from 'react';
// import { CurrentUser } from './CurrentUser';

export default function Confirmation() {
    // const user = useContext(CurrentUser);
    // const [confirmed, setConfirmed] = useState(user[0].confirmed);

    const inputConfirmedMeHandler = (e)=>{
        // setConfirmed(e.target.value)
    }
    return (
        <div>
             <label>Confirmed (T/F/Null)</label>
             {/* <input type='text' placeholder='(T/F/Null)' value={confirmed} onChange={inputConfirmedMeHandler} /> */}
        </div>
    )
}