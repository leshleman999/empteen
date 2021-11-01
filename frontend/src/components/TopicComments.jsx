import React, {useContext} from 'react'
import '../css/topicComments.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CommentIcon from '@mui/icons-material/Comment';
import { EmpTeenContext } from '../App'

function TopicComments() {
    const [user, setUser] = useContext(EmpTeenContext)

    return (
        <div className="topicCommentContainer">
            <div className="topicCommentBox">
                <section className="commentTop">
                    <img className="topicUserImage" src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div className="topicCommentInfo">
                        <h4>Jane Doe</h4>
                        <p className="topicCommentPostDate">
                            Posted Date: Sep 22, 2021
                        </p>
                        <h1 className="topicCommentTitle">
                            Skin Care Creams
                        </h1>
                    </div>
                </section>
                <hr/>
                <div className="commentImageBox">
                    {/* Fills up left side */}
                    <img className="topicCommentImage" src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbiUyMGNhcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <section className="topicCommentContent">
                    <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente tenetur doloremque, porro a numquam culpa omnis, dolorum harum debitis magnam hic sint error? Ad voluptatem fugit natus modi at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente tenetur doloremque, porro a numquam culpa omnis, dolorum harum debitis magnam hic sint error? Ad voluptatem fugit natus modi at.
                    </p>
                </section>
                        <div className="topicCommentCount">
                                <CommentIcon className="topicCommentIcon" fontSize="large"/>
                                <h4>25</h4>
                        </div>
                    </div>
                </div>
    )
}

export default TopicComments
