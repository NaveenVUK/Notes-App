import React, { useState} from "react";
import Inputfield from "./ReusableComponets/Inputfield"
import {UserLogIn} from "../Actions/UserActions"
import {useDispatch} from "react-redux"
import { withRouter } from "react-router";
import {Box, Button} from "@material-ui/core"
import { TextField } from "@material-ui/core";


const Login = (props)=>{
   const {userLoggedStatus} = props
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [Age, setAge] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            email : email,
            password : password
        }
        console.log(formData);
        dispatch(UserLogIn(formData,userLoggedStatus,props))
    }

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
    }

    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
    }


    return (
        <div>
            {/* <form onSubmit={handleSubmit} >
                <br/>
                <Inputfield 
                    name="text" 
                    value={email} 
                    change={setEmail} 
                    placeholder="Enter your Email"
                /> <br/>
                <Inputfield 
                    name="password" 
                    value={password} 
                    change={setPassword} 
                    placeholder="Enter your Password"
                /><br/>
                <input type="submit"/>
            </form> */}
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            textAlign="center"
            className="textinput"
            >
            <div>
                <TextField
                id="filled-basic"
                label="email"
                // defaultValue=""
                value={email}
                onChange={handleEmailChange}
                placeholder="enter your email"
                value = {email}
                variant="filled"
                // onChange={handleAgeChange}
                />
            </div>
                <br/>
            <div>
                <TextField
                // password
                id="filled-basic"
                label="Password"
                // defaultValue=""
                value={password}
                onChange={handlePasswordChange}
                placeholder="enter your Password"
                value = {password}
                variant="filled"
                // onChange={handleAgeChange}
                />
            </div>
                <br/>
            <div>
               <Button variant="contained" onClick={handleSubmit}>Log in</Button>
            </div>
    </Box>
        </div>
        
    )
}


const newLogin = withRouter(Login)
export default newLogin