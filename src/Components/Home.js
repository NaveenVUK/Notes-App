import React from "react";
import pic from "./Assets/Homepage.png"

import { Typography } from "@material-ui/core";

const Home = () => {

    return (
        <div style={{ textAlign: "center" }}>
            <Typography variant="h2" align="center" color="secondary" style={{ padding: 20 }}> Welcome to User Auth App </Typography>
            <img src={pic} alt="" />
        </div>
    )
}

export default Home