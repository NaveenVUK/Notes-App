import React  from "react";
import { useFormik } from "formik";
import * as yup from "yup"
import { TextField , Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    formStyle : {
        // margin : "0px auto",
        padding : "30px",
        borderRadius : "9px",
        // boxShadow : "0px 0px 12px -3px #000000",
        // display : "fles",
        // justifyContent : "space-between",
        backgroundColor : "#c8e6c9",
        textAlign : "center"
    },
    buttonStyle : {
        marginRight : "10px",
        marginTop : "10px"
    }
})

const AddNoteForm = (props)=>{
    const {formSubmit, heading, text} = props
    const classes = useStyles()

    const validationShema = yup.object({
        title : yup.string().required("title is required"),
        body : yup.string().required("Body is required")
    })

    const formik = useFormik({
        initialValues : {
            title : heading ? heading : "",
            body : text ? text : ""
        },
        onSubmit : (values)=>{
             formSubmit(values)
             formik.handleReset()
             
        },
        validationSchema : validationShema
    })

    return (
        <div>
        <form onSubmit={formik.handleSubmit} className={classes.formStyle}>
            <TextField
                required
                id = "title"
                name = "title"
                label = "title"
                margin = "normal"
                variant = "filled"
                value = {formik.values.title}
                onChange = {formik.handleChange}
                error = {formik.touched.title && Boolean(formik.errors.title)}
                helperText = {formik.touched.title && formik.errors.title}
                fullWidth
            />
            <br/>
             <TextField
                required
                id = "body"
                name = "body"
                label = "body"
                margin = "normal"
                variant = "filled"
                value = {formik.values.body}
                onChange = {formik.handleChange}
                error = {formik.touched.body && Boolean(formik.errors.body)}
                helperText = {formik.touched.body && formik.errors.body}
                fullWidth
            />
            <br/>
            <Button type="submit" variant="outlined" color="inherit" className={classes.buttonStyle}>
                 Submit 
            </Button>
            <Button
              type="button"
              className="outline"
              onClick={formik.handleReset}
              variant="outlined"
              color="inherit"
              className={classes.buttonStyle}
            >
              Reset
            </Button>
        </form>
        </div>
    )
}

export default AddNoteForm