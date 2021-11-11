import React, { useEffect, useState } from "react";
import {Link, Route} from "react-router-dom"
import Login from "./Login";
import Account from "./Account";
import Home from "./Home"
import Register from "./RegisterComponents/Register";
import NotesContainor from "./NotesComponents/NotesContainor";
import { AppBar, Box, CssBaseline, Grid, Toolbar, Typography } from "@material-ui/core";



const UserAuthoContainer = (props)=>{
    const [loggedIn, setLoggedIn] = useState(false)

    const userLoggedStatus = ()=>{
        const toggle = !loggedIn
        setLoggedIn(toggle)
    }

    useEffect(()=>{
        localStorage.getItem("token") && userLoggedStatus()
    },[])



    return (
        <div>
            <CssBaseline/>
            <AppBar position="static"> 
                <Toolbar >
                    <Typography variant="h2" component="div"> User Auth </Typography>
                    <Link to="/"> Home </Link> |
                    {loggedIn ? (
                        <>
                        <Box> <Link to="/account"> Account </Link>|</Box>
                            
                            <Link to="/notes"> My notes </Link>|
                            <Link to="/" onClick={()=>{
                                localStorage.clear()
                                alert("Successfully Logged Out")
                                userLoggedStatus()
                            }}> Logout </Link>|
                        </>
                    ):(
                        <>
                            <Link to="/register"> Register </Link>|
                            <Link to="/login"> Login </Link>
                        </>           
                    )}
                </Toolbar>
            </AppBar>
                <Route path="/register" component={Register} exact/>
                <Route path="/" component={Home} exact/>
                <Route path="/login" render = {()=>{
                    return <Login {...props} userLoggedStatus={userLoggedStatus}/>
                }} exact/>
                <Route path="/account" component={Account} exact/>
                <Route path="/notes" component={NotesContainor} exact/>
            
        </div>
    )
}

export default UserAuthoContainer