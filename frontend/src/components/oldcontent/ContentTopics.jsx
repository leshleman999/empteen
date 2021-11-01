import React from 'react'
import '../css/contentTopics.css'
// import { fontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee} from '@fortawesome/free-solid-svg-icons'

import '../css/contentTopics.css'
import ContentTopic from './ContentTopic'
import Button from '@material-ui/core/Button'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Card from '@mui/material/Card'


function ContentTopics(props) {



    return (

        <>
        <ContentTopic onClick={props.onClick}/> 
        <ContentTopic />
        <ContentTopic /> 
        <ContentTopic />
        <ContentTopic /> 
        <ContentTopic />
        <ContentTopic />   
        </>
    )
}

export default ContentTopics
