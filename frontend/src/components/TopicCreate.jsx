import React from 'react'
import '../css/topicCreate.css'

function CreateTopic() {
    return (
        <div className="topicCreateContainer">
            <div className="topicCreateCard">
                <label>Image Upload</label>
                <label>Author: </label>
                <input type='text'></input>
                <label>Title</label>
                <input type="text" ></input>
                <label>Content</label>
                <input type='text'></input>
            </div>
        </div>
    )
}

export default CreateTopic
