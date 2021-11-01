import React, {useContext, useState} from 'react'
import Avatar from "@material-ui/core/Avatar"
import "../css/contentAnnouncement.css";
import { EmpTeenContext } from '../App'
import { EmpTeenCurEnv } from '../App';
// import {CurrentEnv} from '../App';


function ContentAnnouncement() {
    // const value = useContext(CurrentEnv); 
    // console.log("Annoucnements", value[0].Announcements[0].title)
    const [curEnv,setCurEnv]=useContext([])
    const [user, setUser] = useContext(EmpTeenContext)
    return (
        <div className = "container">
            
            <div className="display">
                <div className="announcements">
                    {/* Eventually populate announcements with dynamic posts instead of static */}
                    <div className = "post">
                        <div className = "info">
                            <div className = "profile">
                            <img className="topicUserImage" src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />     
                            </div>
                            <div className = "Title">
                                {/* <h4>{value[0].Announcements[0].title}</h4> */}
                                <h2>Welcome To The Program</h2>
                                </div>
                            <div className="date">Sep 14,2021</div>
                        </div>
                        <div className = "content" >
                        In your teen and tween years, everything’s changing—your body, your brain, your perspective, your confidence in yourself and how people treat you. How do you navigate it? With fun and friends (OF COURSE!), and learning various Jedi mind tricks, yoga, dancing it out, nutrition, communication techniques, and much more. That’s what we do at Empowerteen.

                        </div>
                    
                    </div>
                    <div className = "post">
                        <div className = "info">
                            <div className = "profile">
                            <img className="topicUserImage" src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                            </div>
                            <div className = "Title">
                                <h2>Summer Retreat</h2>
                            </div>
                            <div className="date">Sep 12,2021</div>
                        </div>
                        <div className = "content">
                        Registration for the high demand summer retreats is on Thursday, June 25th, so keep checking back as we add details of each retreat on this Events page. This year we will be offering our summer retreats VIRTUALLY ONLINE which means you don’t have to live nearby to attend! We will have 6 offerings for boys, girls, high school ages, and middle school ages! Please stay tuned as we update the details regularly.

                        </div>
                        
                    </div>
                    
                    {curEnv && curEnv.envAnnouncements?.map(post => (
                        <div className = "post">
                            <div className = "info">
                                {/* <div className = "profile">
                                    <Avatar
                                        className="avatar"
                                        alt = "" 
                                        src = "https://avatars.githubusercontent.com/lancetoledo" 
                                    /> 
                                    
                                </div> */}
                                <div className = "title">
                                    {post.annTitle}
                                </div>
                                
                            </div>
                            <div className="annContent">{post.annContent} </div>
                    
                        </div>

                    ))}
        
                </div>
            </div>
        </div>
    )
}

export default ContentAnnouncement
