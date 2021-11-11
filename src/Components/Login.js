import React, { useEffect }  from "react";
import {clearError, UserLogIn} from "../Actions/UserActions"
import {useDispatch, useSelector} from "react-redux"
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

    useEffect(()=>{
        dispatch(clearError())
    },[])

    const error = useSelector((state)=>{
        return state.users.errors
    })

    const clearErrors = ()=>{
        dispatch(clearError())
    }

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
            <p style={{color:"red"}}> {error} </p>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    id = "email"
                    name="email"
                    label="email"
                    margin = "normal"
                    value = {formik.values.email}
                    onChange = {formik.handleChange}
                    error = {formik.touched.email && Boolean(formik.errors.email)}
                    helperText = {formik.touched.email && formik.errors.email}
                />
                <br/>
                <TextField
                    id = "password"
                    name="password"
                    type="password"
                    label="password"
                    margin = "normal"
                    value = {formik.values.password}
                    onChange = {formik.handleChange}
                    error = {formik.touched.password && Boolean(formik.errors.password)}
                    helperText = {formik.touched.password && formik.errors.password}
                /> 
                <br/>
                <Button type="submit" variant="outlined"> Submit </Button>
                <Button onClick = {()=>{
                    clearErrors()
                    formik.resetForm()
                }}> Reset </Button>
            </form>
        </div>
    )
}


const newLogin = withRouter(Login)
export default newLogin


