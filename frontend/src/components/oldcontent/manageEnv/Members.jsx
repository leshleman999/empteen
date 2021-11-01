import React from 'react'

const Members = ({values}) => {
    return (
        <div>
            <h2>Members</h2>
            {
                values.Members.map((member) =>
                <div key={member.userName} className="envItem"> 
                    <p key={member} className="envMember">{member.userName}</p>
                </div>
            )
            }
        </div>
    )
}

export default Members
