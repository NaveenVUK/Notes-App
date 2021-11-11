import React, { useState }  from "react";
import {useDispatch} from "react-redux"
import Inputfeild from "../ReusableComponets/Inputfield";
import { StartUserUpdate } from "../../Actions/UserActions";
import { withRouter } from "react-router";

const RegisterForm = (props)=>{
    const dispatch = useDispatch()
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword,setUserPssword] = useState("")


    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            username : userName,
            email : userEmail,
            password : userPassword
        }
        console.log(formData);
        dispatch(StartUserUpdate(formData,clearForm,props))
    }

     const clearForm = ()=>{
        setUserName("")
        setUserEmail("")
        setUserPssword("")
    } 

    return (
        <form onSubmit={handleSubmit}>
            <Inputfeild name="text" placeholder="Enter Username" sta={userName} change={setUserName}/>
            <Inputfeild name="text" placeholder="Enter Email" sta={userEmail} change={setUserEmail}/>
            <Inputfeild name="password" placeholder="Enter password" sta={userPassword} change={setUserPssword}/>
            <input type="submit"/>
        </form>
    )
}

const WrapperComponent = withRouter(RegisterForm)
export default WrapperComponent