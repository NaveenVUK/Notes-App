import React from "react";
import Heading from "../ReusableComponets/Heading";
import RegisterForm from "./RegisterForm";


const Register = (props)=>{

    return (
        <div>
            <RegisterForm props={props}/>
        </div>
    )
}

export default Register