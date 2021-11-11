import React from "react";
import Heading from "../ReusableComponets/Heading";
import RegisterForm from "./RegisterForm";


const Register = (props)=>{

    return (
        <div>
            <Heading name="h1" title="Register with us"/>
            <RegisterForm props={props}/>
        </div>
    )
}

export default Register