import React from "react";

const Heading = (props)=>{
    if(props.name === "h1"){
        return <h1> {props.title}</h1>
    } else if(props.name === "h2"){
        return <h2> {props.title} </h2>
    }
}

export default Heading