import React, { useEffect }  from "react";
import {clearError, UpdateError, UserLogIn} from "../Actions/UserActions"
import {useDispatch, useSelector} from "react-redux"
import { withRouter } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup"
import { TextField , Button, Grid, Paper, Avatar, Typography } from "@material-ui/core";
import { Alert, AlertTitle} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { LockOutlined } from "@material-ui/icons";
import {Link} from "react-router-dom"

const useStyles = makeStyles({
    paperStyle : {
       padding : 20,
       height : "70vh",
       width : 380,
       margin : "20px auto"
    },
    avatarStyle : {
        backgroundColor : "green"
    },
    btnstyle : {
        margin : "18px 0px 8px 0px "
    }
})

const Login = (props)=>{
   const {userLoggedStatus} = props
   const classes = useStyles()
    const dispatch = useDispatch()

    if(props.location.state){
         const errorRouter = props.location.state.error
         dispatch(UpdateError(errorRouter))
    }
   
   
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
            
            <Grid>
                <Paper elevation={10} className={classes.paperStyle}>
                    <Grid align="center">
                        <Avatar className={classes.avatarStyle}><LockOutlined/></Avatar>
                            <h2> Sign in </h2>
                    </Grid>
                    {error && (
                    <Alert severity="error">
                        <AlertTitle> Error </AlertTitle>
                        <strong> {error} </strong>
                    </Alert>
                    )}
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
                            fullWidth
                        />
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
                            fullWidth
                        /> 
                        <Button type="submit" variant="contained" color="primary" fullWidth className={classes.btnstyle}> Submit </Button>
                        <Typography>
                            Do you have an Account ? <Link to="/register"> Sign up </Link>
                        </Typography>
                     </form>
                </Paper>
            </Grid>
           
        </div>
    )
}


const newLogin = withRouter(Login)
export default newLogin


