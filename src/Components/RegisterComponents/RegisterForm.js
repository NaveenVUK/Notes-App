import React, { useEffect}  from "react";
import {useDispatch, useSelector} from "react-redux"
import { clearError, StartUserUpdate } from "../../Actions/UserActions";
import { withRouter } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup"
import { TextField } from "@material-ui/core";
import Button from "@restart/ui/esm/Button";

const RegisterForm = (props)=>{
    const dispatch = useDispatch()

    const errors = useSelector((state)=>{
        return state.users.errors
    })

    const validationForm = yup.object({
        username : yup.string().required("User Name is required"),
        email : yup.string().email("Invalid email").required("Email is required"),
        password : yup.string().required("password is required")
    })

    const formik = useFormik({
        initialValues : {
            username : "",
            email : "",
            password : ""
        },
        onSubmit : (values)=>{
            dispatch(StartUserUpdate(values,props))
        },
        validationSchema : validationForm
    })

    useEffect(()=>{
        dispatch(clearError())
    },[])

    const clearErrors = ()=>{
        dispatch(clearError())
    }


    

    return (
        <div>
            <p style={{color:"red"}}> {errors && errors}</p>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    id = "username"
                    name = "username"
                    label = "username"
                    value = {formik.values.username}
                    onChange = {formik.handleChange}
                    error = {formik.touched.username && Boolean(formik.errors.username)}
                    helperText = {formik.touched.username && formik.errors.username}
                /> <br/>
                <TextField
                    id = "email"
                    name = "email"
                    label = "email"
                    value = {formik.values.email}
                    onChange = {formik.handleChange}
                    error = {formik.touched.email && Boolean(formik.errors.email)}
                    helperText = {formik.touched.email && formik.errors.email}
                /> <br/>
                <TextField
                    id = "password"
                    name = "password"
                    label = "password"
                    value = {formik.values.password}
                    onChange = {formik.handleChange}
                    error = {formik.touched.password && Boolean(formik.errors.password)}
                    helperText = {formik.touched.password && formik.errors.password}
                /> <br/><br/>
                <Button type="submit"> Submit </Button>
                <Button onClick={()=>{
                    clearErrors()
                    formik.resetForm()
                }}> Reset </Button>
            </form>

        </div>
    )
}

const WrapperComponent = withRouter(RegisterForm)
export default WrapperComponent


    // const [userName, setUserName] = useState("")
    // const [userEmail, setUserEmail] = useState("")
    // const [userPassword,setUserPssword] = useState("")


    // const handleSubmit = (e)=>{
    //     e.preventDefault()
    //     const formData = {
    //         username : userName,
    //         email : userEmail,
    //         password : userPassword
    //     }
    //     console.log(formData);
    //     dispatch(StartUserUpdate(formData,clearForm,props))
    // }

    //  const clearForm = ()=>{
    //     setUserName("")
    //     setUserEmail("")
    //     setUserPssword("")
    // } 

    // return (
    //     <form onSubmit={handleSubmit}>
    //         <Inputfeild name="text" placeholder="Enter Username" sta={userName} change={setUserName}/>
    //         <Inputfeild name="text" placeholder="Enter Email" sta={userEmail} change={setUserEmail}/>
    //         <Inputfeild name="password" placeholder="Enter password" sta={userPassword} change={setUserPssword}/>
    //         <input type="submit"/>
    //     </form>
    // )