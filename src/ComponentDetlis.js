import React from 'react';
import faker from 'faker';


const ComponentDetlis = props => {
    console.log(props);
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img src={props.avatar} alt="avater" />
        </a>
        <div className="content">
            <a href="/" className="author">
              {props.author}
            </a>
            <div className="metadata">
    <span className="data">{props.time}</span>
            </div>
    <div className="text">{props.content}</div>
        </div>
    </div>
    );
};

export default ComponentDetlis