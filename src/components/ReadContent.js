import React, { Component } from "react";

function ReadContent(props) {
  return (
    <article>
        <h2>{props.title}</h2>
        {props.desc}
        <div>
          <img src={props.img} alt={props.title}></img>
        </div>
      </article>
  )
}

export default ReadContent;
