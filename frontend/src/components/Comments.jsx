import { Component } from "react";
import React from "react";
import { Avatar } from "@material-ui/core";
//  import ContentAnnouncement from "./ContentAnnouncements";
// import ContentTopics from "./ContentTopics";
import '../css/comments.css'

export class comments extends Component {
    constructor(props){
        super(props);
        this.commentBox=React.createRef();

        this.state = {
            commentValue: "",
            commentLine: [{ commentId:"", text: "",userId:"",postDate:'',avatar:'', username:"" }],
              };
    }
    
    render() {
        return (
            
          <div className="container">
              <h1>Comments Page</h1>
              <div className="commentBox">
                
                <div className="replyBox">
                    <input type="Text" name="comment-box" id="comment-box" className="commentInput" placeholder="Type something"/>
                    <button className="reply">Post</button>
                </div>
              </div>
              <div className="parentComment " >
                <div className="userInfo">
                  <Avatar img=""></Avatar>
                  <div className="username">username</div>
                </div>
                <div className="contentInfo">
                  <div className="date">date</div>
                  <div className="commentsContent">
                  
               
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident facilis numquam ullam facere quo 
                  molestiae dolorum incidunt rem aut, similique libero ducimus cupiditate quisquam odio. 
                  Laboriosam eligendi rerum iusto deleniti? </div>
                  <button className="reply">Post</button>
                </div>
              </div>
              <div className="childComment" >
                <div className="userInfo">
                  <Avatar img=""></Avatar>
                  <div className="username">username</div>
                </div>
                <div className="contentInfo">
                  <div className="date">date</div>
                  <div className="commentsContent">
                  
               
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident facilis numquam ullam facere quo 
                  molestiae dolorum incidunt rem aut, similique libero ducimus cupiditate quisquam odio. 
                  Laboriosam eligendi rerum iusto deleniti? </div>
                </div>
              </div>
          </div>
        )
        
    }
    
}

export default comments
