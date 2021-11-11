import React from "react";
import {Route, Redirect} from "react-router-dom"

const ProtectedRoute = ({auth, component : Component, ...rest})=>{
    return (
        <Route {...rest}  render = {(props)=>{
            if(auth){
                return <Component {...props}/>   
            } else{
                return <Redirect to={{ pathname : "/login", state : {from : props.location, error: "You need to login first!"}}}/>
            }
            
        }}/>
    )
}

export default ProtectedRoute
