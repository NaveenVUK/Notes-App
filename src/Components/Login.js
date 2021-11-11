import React, { useState} from "react";
import {UserLogIn} from "../Actions/UserActions"
import {useDispatch} from "react-redux"
import { withRouter } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup"
import { TextField } from "@material-ui/core";
import Button from "@restart/ui/esm/Button";

const Login = (props)=>{
   const {userLoggedStatus} = props
    const dispatch = useDispatch()
   
    const validationSchema = yup.object(
        {
            email : yup.string().email("Enter valid email").required("Email Required"),
            password : yup.string().required("Password is required")
        }
    )
    
    const formik = useFormik({
        initialValues : {
            email : "",
            password : ""
        },
        onSubmit : (values)=>{
            dispatch(UserLogIn(values,userLoggedStatus,props))
        },
        validationSchema : validationSchema
    })


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    id = "email"
                    name="email"
                    lable="email"
                    margin = "normal"
                    value = {formik.values.email}
                    onChange = {formik.handleChange}
                    error = {formik.touched.email && Boolean(formik.touched.email)}
                    helperText = {formik.touched.email && formik.errors.email}
                />
                <br/>
                <TextField
                    id = "password"
                    name="password"
                    type="password"
                    lable="password"
                    margin = "normal"
                    value = {formik.values.password}
                    onChange = {formik.handleChange}
                    error = {formik.touched.password && Boolean(formik.touched.password)}
                    helperText = {formik.touched.password && formik.errors.password}
                /> 
                <br/>
                <Button type="submit" variant="outlined"> Submit </Button>
            </form>
        </div>
    )
}


const newLogin = withRouter(Login)
export default newLogin


