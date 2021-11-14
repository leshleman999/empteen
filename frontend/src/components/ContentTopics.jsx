import React, {useEffect} from 'react'
import '../css/contentTopics.css'
import ContentTopic from './ContentTopic'
// import Button from '@material-ui/core/Button'
// import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import Card from '@mui/material/Card';
// import {Rating} from '@mui/material'
// import CommentIcon from '@mui/icons-material/Comment';
import axios from 'axios'
import { useStateValue } from '../utils/StateProvider';

   

function ContentTopics({handleTopicPopUp}) {
    const [state,dispatch] = useStateValue()
    //to see the state variables, go to /utils/reducer.js  ---example:  state.user.displayname
    
    // const [getAllTopics, setGetAllTopics] = useState([])

    useEffect(() => {
 // make a request for all topics with a given ID
    // const environments =
    // axios.get('/topics',curEnv).then((res)=>{
    //     // success
    //     console.log("topics",res.data)
    //     setGetAllTopics(res.data)

    //     res.data.map(topic => {
    //         console.log('topic',topic)
    //         return (
    //             <div>
    //                 <ContentTopic topic={topic}/>
    //             </div>
    //         )
    //     })
        // dispatch({
        //     type: 'LOGIN_SUCCESS', 
        //     payload: result.data    //passing the user object
        // });

    // }).catch((error)=>{
    //     // handle error
    //     console.log(error)
    // })
     
    }, [])

// console.log('get all topics', getAllTopics)  

    // console.log('env', environments)

    
     return (
        <div className="topicDisplay"> 
            {state.envTopics.map((item)=>{
                const topic = item; 
                console.log('map topics', topic)

                return (
                    <div className="topicContainer">
                        <ContentTopic topic={topic} key={topic._id} handleTopicPopUp={handleTopicPopUp}/> 
                    </div>
                )
            })}
        </div>
        )
}
        
                //         <ContentTopic topic={topic} key={topic.topic_id} handleTopicPopUp={handleTopicPopUp}/>
                //         <div className="contentTopics">

                //             <img className="topicImage" src={topic.topicImg} alt="" />

                //             <div className="contentSide">

                //                 <h1 className="topicTitle" onClick='{props.onClick}'>
                //                 {topic.topTitle}
                //                 </h1>
                //                 <h5 className="topicPostDate">
                //                     Post Date: {topic.topDate}
                //                 </h5>
                //             <section className="contentTopicsBottom">
                //                 <div className="rating">
                //                     <Rating  className="starRating" name="rating" />
                //                     <h5 className="overallRating">
                //                         Overall Rating {topic.topicRating}
                //                     </h5>
                //                 </div>
                //                 <div className="topicComments">
                //                     <CommentIcon className="commentIcon" fontSize="large" onClick="{props.onClick}"/>
                //                     <h4>25</h4>
                //                 </div>
                //             </section>
                //         </div>
                // </div> 
                

export default ContentTopics
