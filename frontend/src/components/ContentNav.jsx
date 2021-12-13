import React from 'react'
import "../css/contentNav.css";
import ContentInfo from '../components/ContentInfo'
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import ContentAnnouncements from './ContentAnnouncements';
import About from './About'
import ContentTopics from './ContentTopics';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function ContentNav(props) {

    return (
        <div className="navContainer">
            <div className="navTabs">
                <Router className="navRouter">
                    <div className="navMenu">
                        {/* ABOUT */}
                        <div className="navMenuLink">
                            <NavLink className="navLink" activeClassName="active navLink" to='/home/about'>About</NavLink>
                        </div>
                        
                        {/* ANNOUNCEMENTS */}
                        <div className="navMenuLink">
                            <NavLink className="navLink" activeClassName="active navLink" to='/home/announcements'>Announcements</NavLink>
                            <AddCircleOutlineOutlinedIcon className="addIcon" sx={{ fontSize: 28 }} onClick={props.handleOpenCreateTopic}/>
                        </div>
                        

                        {/* TOPICS */}
                        <div className="navMenuLink">
                            <NavLink className="navLink" activeClassName="active navLink" to='/home/topics'>Topics</NavLink>
                            <AddCircleOutlineOutlinedIcon className="addIcon" sx={{ fontSize: 28 }}/>
                        </div>
                    </div>

                    <Switch>
                        <Route path='/home/announcements'>
                            <ContentAnnouncements />
                        </Route>
                        <Route path='/home/about'>
                            <About />
                        </Route>
                        <Route path='/home/topics'>
                            <ContentTopics />
                        </Route>
                        <Route path='/home' exact>
                            <Redirect to='/home/announcements' />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default ContentNav
