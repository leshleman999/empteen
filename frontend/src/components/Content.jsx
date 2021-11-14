import React, {useState} from 'react'
import '../css/content.css'
import ContentImage from './ContentImage'
import ContentNav from './ContentNav'
import ContentInfo from '../components/ContentInfo'
// import ManageEnvironments from '../components/ManageEnvironments'
import TopicComments from './TopicComments'
import TopicCreate from './TopicCreate'
// import Backdrop from './Backdrop'
// import Sidebar2 from './Sidebar2'
// import Sidebar from './Sidebar'
import { useStateValue } from '../utils/StateProvider';

function Content() {
    const [state,dispatch] = useStateValue()
    const [topicPopUp, setTopicPopUp] = useState(false);
    const [createTopicPopUp, setCreateTopicPopUp] = useState(false);
    // const [adminsidebar, setAdminSidebar] = useState(false);

   
    // opens single topic pop up
    const handleTopicPopUp = () => {
        setTopicPopUp(true);
    }

    // closes single topic pop up
    // const handleCloseTopicPopUp = () => {
    //     setTopicPopUp(false)
    // }

        const handleOpenCreateTopic = () => {
            console.log('open create topic')
            setCreateTopicPopUp(true)
        }

        const handleCloseCreateTopic = () => {
            console.log('create topic')
            setCreateTopicPopUp(false)
        }
    
        // const handlePostTopic = () => {
        //     console.log('post topic')
        // }
    
        // const handleDeleteTopic = () => {
        //     console.log('delete topic')
        // }
        


    return (
        
        <div className="contentContainer">
            <div className="contentBox">
                <ContentImage />
                <ContentNav onClick={handleTopicPopUp} handleOpenCreateTopic={handleOpenCreateTopic}/>
            </div>
            {/* <Backdrop />
            <TopicComments /> */}
            
            {/* Pops up one topic onClick */}
            {topicPopUp && <TopicComments />}
            {/* {topicPopUp && <Backdrop onClick={handleCloseTopicPopUp} /> || createTopicPopUp && <Backdrop onClick={handleCloseCreateTopic} />} */}
            {/* Pops up create topic menu onClick */}
            {createTopicPopUp && <TopicCreate onClick={handleCloseCreateTopic} />}
        </div>
    )

    //  {return <div className="home-content">
    // {adminsidebar ? <Sidebar2 /> : <Sidebar /> }
    //     </div>}
}


export default Content
