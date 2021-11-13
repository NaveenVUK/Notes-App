import { TextareaAutosize, Typography } from "@material-ui/core";
import React from "react";
import pic from "../Components/Homepage.png"

const Home = ()=>{


    return (
        <div style={{textAlign:"center"}}>
            <Typography variant ="h2" align="center" color="secondary" style={{padding:20}}> Welcome to User Auth App </Typography>
            <img src={pic} alt="image"/>
        </div>
    )
}

export default Home