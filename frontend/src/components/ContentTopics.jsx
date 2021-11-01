import React, { useState, useEffect, useContext} from 'react'
import '../css/contentTopics.css'
import ContentTopic from './ContentTopic'
import Button from '@material-ui/core/Button'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import {Rating} from '@mui/material'
import CommentIcon from '@mui/icons-material/Comment';
import axios from 'axios'
import { EmpTeenCurEnv } from '../App' 


   

function ContentTopics({handleTopicPopUp}) {
    const [curEnv, setCurEnv] = useContext(EmpTeenCurEnv)
    const [getAllTopics, setGetAllTopics] = useState([])

    useEffect(() => {
 // make a request for all topics with a given ID
    const environments =
    axios.get('/topics',curEnv).then((res)=>{
        // success
        console.log(res.data)
        setGetAllTopics(res.data)
        res.data.map(topic => {
            console.log('topic',topic)
            return (
                <div>
                    <ContentTopic topic={topic}/>
                </div>
            )
        })
              
    }).catch((error)=>{
        // handle error
        console.log(error)
    })
     
    }, [])

// console.log('get all topics', getAllTopics)  

    // console.log('env', environments)

    
     return (
        <div className="topicDisplay"> 
            {getAllTopics.map((item)=>{
                const topic = item; // topics
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
