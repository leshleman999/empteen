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
    console.log(state.curEnv);
    const {envTopics} = state.curEnv;
    console.log(envTopics)

    // useEffect(() => {
//  make a request for all topics with a given ID
    // axios.post('http://localhost:5000/topics',{envID: state.curEnv._id})
    // .then((result) => {

    //  dispatch({
    //      type: 'GET_USER_ENVIRONMENTS', 
    //      payload: result.data    //passing the user object
    //  });
    //  console.log("Home state.envTopics",result.data)

    //  console.log("Home state.curEnv",state.curEnv._id)

//  })
//  .catch(err =>
//      console.log("error",err)
     // dispatch({type: 'LOGIN_FAILURE', payload: result.data});
 
//  )})


    // const environments =
    // axios.get('/topics',state.curEnv).then((res)=>{
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
    //     dispatch({
    //         type: 'LOGIN_SUCCESS', 
    //         payload: result.data    //passing the user object
    //     });

    // }).catch((error)=>{
    //     // handle error
    //     console.log(error)
    // })
     
    // }, [])

// console.log('get all topics', getAllTopics)  

    console.log('hello');

    
     return (
        <div className="topicDisplay"> 
            {envTopics.map((item)=>{
                const topic = item; 
                console.log('map topics', topic)

                return (
                    <div className="topicContainer" key={topic._id} >
                        <ContentTopic topic={topic} handleTopicPopUp={handleTopicPopUp}/> 
                    </div>
                )
            })}
        </div>
        )
}
                

export default ContentTopics
