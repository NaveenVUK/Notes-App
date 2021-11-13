import React from "react";
import {Route, Redirect} from "react-router-dom"

const ProtectedRoute = ({auth, component : Component, ...rest})=>{
    const isAuthenticated = Boolean(localStorage.getItem("token"));
    return (
        <Route {...rest}  render = {(props)=>{
            if(isAuthenticated){
                return <Component {...props}/>   
            } else{
                return <Redirect to={{ pathname : "/login", state : {from : props.location, error: "You need to login first!"}}}/>
            }
        }}/>
    )
}

export default ProtectedRoute
