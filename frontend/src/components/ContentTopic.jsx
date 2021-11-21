import React, {useState} from 'react'
// import contentTopics from '../css/contentTopics.css'
import {Rating} from '@mui/material'
// import Link from '@mui/material/Link'
// import Breadcrumbs from '@mui/material/Breadcrumbs'
// import Typography from '@mui/material/Typography'
import CommentIcon from '@mui/icons-material/Comment';
import { useStateValue } from '../utils/StateProvider';

function ContentTopic(props) {
    const [state,dispatch] = useStateValue()
    
    const {topic, handleTopicPopUp} = props;
    // const topic = props.envs(0);
    const [starValue, setStarValue] = useState(0);
    // console.log('topic', topic)

    
    return (
        <div className="topicContainer">
            <div className="contentTopics">
                {/* TOP SECTION IMAGE */}
                <img className="topicImage" src={topic.topImage} alt="" />

                {/* MIDDLE SECTION CONTENT */}
                <div className="contentSide">
                    {/* <div className="topicInfo"> */}
                        <p className="topicPostDate">
                            Post Date: Sep 22, 2021
                        </p>
                            <h2 className="topicTitle" onClick={handleTopicPopUp}>
                                {topic.topTitle}
                            </h2>
                        
                    {/* </div>  */}

                    {/* MIDDLE SECTION */}
                    {/* <section className="contentTopicsMiddle">
                        <p className="topicContent">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente tenetur doloremque, porro a numquam culpa omnis, dolorum harum debitis magnam hic sint error? Ad voluptatem fugit natus modi at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente tenetur doloremque, porro a numquam culpa omnis, dolorum harum debitis magnam hic sint error? Ad voluptatem fugit natus modi at.
                        </p>
                    </section> */}
                    
                    {/* BOTTOM SECTION */}
                    <section className="contentTopicsBottom">
                        <div className="rating">
                        {/* onClick={props.onClick} */}
                        {/* onClick={props.handleInputChange} */}
                            <Rating  className="starRating" name="rating" onChange={(e)=>{
                                setStarValue(e.target.value)
                                // console.log(e.target.value)
                            }}  />
                            <h5 className="overallRating">
                                Overall Rating {starValue}
                            </h5>
                        </div>
                        <div className="topicComments">
                            {/* <CommentIcon className="commentIcon" fontSize="large" onClick={handleTopicPopUp}/> */}
                            <h4>25</h4>
                        </div>
                    </section>
                </div>
            </div>
            {/* <Breadcrumbs aria-label="breadcrumbs">Breadcrumbs
                <Link underline="hover" color="inherit" href="/">Skin Care for Girls</Link>
                <Typography colot="text.primary">Skin Care Creams</Typography>
            </Breadcrumbs> */}

        </div>
    )
}

export default ContentTopic
