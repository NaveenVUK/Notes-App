import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router";

import { clearError, StartUserUpdate } from "../../Actions/UserActions";

import { TextField, Button, Grid, Paper, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Alert, AlertTitle } from "@mui/material";
import { HowToRegRounded } from "@material-ui/icons";
import { useFormik } from "formik";
import * as yup from "yup"

const useStyles = makeStyles({
    paperStyle: {
        padding: 20,
        height: "70vh",
        width: 380,
        margin: "20px auto"
    },
    avatarStyle: {
        backgroundColor: "green"
    },
    btnstyle: {
        margin: "18px 0px 8px 0px "
    },
    headingStyle: {
        backgroundrepeat: "no-repeat",
        backgroundposition: "0 -130px",
        height: "51px",
        width: "175px",
    }
})

const RegisterForm = (props) => {
    const dispatch = useDispatch()
    const classes = useStyles()

    const errors = useSelector((state) => {
        return state.users.errors
    })

    const validationForm = yup.object({
        username: yup.string().required("User Name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup.string().required("password is required")
    })

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            dispatch(StartUserUpdate(values, props))
        },
        validationSchema: validationForm
    })

    useEffect(() => {
        dispatch(clearError())
    }, [])

    const clearErrors = () => {
        dispatch(clearError())
    }

    return (
        <Grid>
            <Paper elevation={10} className={classes.paperStyle}>
                <Grid align="center">
                    <Avatar className={classes.avatarStyle}><HowToRegRounded /></Avatar>
                    <h2 className={classes.headingStyle}> Register with us </h2>
                </Grid>
                {errors && (
                    <Alert severity="error">
                        <AlertTitle> Error </AlertTitle>
                        <strong> {errors} </strong>
                    </Alert>
                )}
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        id="username"
                        name="username"
                        label="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        fullWidth
                    />
                    <TextField
                        id="email"
                        name="email"
                        label="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        fullWidth
                    />
                    <TextField
                        id="password"
                        name="password"
                        label="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        fullWidth
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth className={classes.btnstyle} > Submit
                    </Button>
                    <Button type="submit" variant="contained" color="primary" fullWidth className={classes.btnstyle} onClick={() => {
                        clearErrors()
                        formik.resetForm()
                    }} > Reset
                    </Button>
                </form>
            </Paper>
        </Grid>
    )
}

const WrapperComponent = withRouter(RegisterForm)
export default WrapperComponent
