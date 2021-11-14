import React from 'react'
// import Avatar from "@material-ui/core/Avatar"
import "../css/contentAnnouncement.css";
import { useStateValue } from '../utils/StateProvider';
import moment from 'moment'


function ContentAnnouncement() {
    const [state,dispatch] = useStateValue()
    
    return (
        <div className = "container">
            
            <div className="display">
                <div className="announcements">
                    {state.curEnv && state.curEnv.envAnnouncements?.map((post,index) => (
                        <div className = "post" key={index}>
                            <div className = "info">
                                    <div className = "date">
                                        <p>{moment(post.annDate).fromNow()}</p>
                                    </div>
                                
                                <div className = "profile">
                                    <div className="avatarBox">
                                        <img
                                            className="avatar"
                                            alt = "" 
                                            src = {state.user.image} 
                                        /> 
                                    </div>
                                    <p>{state.user.displayname}</p>
                                </div>

                                <div className="textualContent">
                                    <div className = "title">
                                        {post.annTitle}
                                    </div>

                                    <div className="annContent">
                                        {post.annContent} 
                                    </div>
                                </div>

                            </div>
                    
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContentAnnouncement
