import React, {useState} from 'react'
import contentTopics from '../css/contentTopics.css'
import {Rating} from '@mui/material'
import Link from '@mui/material/Link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import CommentIcon from '@mui/icons-material/Comment';


function ContentTopic(props) {

    const [starValue, setStarValue] = useState(0);

    return (
        <div className="topicContainer">
            <div className="contentTopics">
                {/* TOP SECTION IMAGE */}
                <img className="topicImage" src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbiUyMGNhcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />

                {/* MIDDLE SECTION CONTENT */}
                <div className="contentSide">
                    {/* <div className="topicInfo"> */}
                        {/* <Link href="./ContentTopic"> */}
                        <h5 className="topicPostDate">
                            Post Date: Sep 22, 2021
                        </h5>
                            <h1 className="topicTitle" onClick={props.onClick}>
                                Skin Care Creams
                            </h1>
                        {/* </Link>                    */}
                        
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
                            <CommentIcon className="commentIcon" fontSize="large" onClick={props.onClick}/>
                            <h4>25</h4>
                        </div>
                    </section>
                </div>
            </div>
        
            {/* <img className="topicUserImage" src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" /> */}

                    {/* <Breadcrumbs aria-label="breadcrumbs">Breadcrumbs
                <Link underline="hover" color="inherit" href="/">Skin Care for Girls</Link>
                <Typography colot="text.primary">Skin Care Creams</Typography>
            </Breadcrumbs> */}

        </div>
    )
}

export default ContentTopic
