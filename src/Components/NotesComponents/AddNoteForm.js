import React  from "react";
import { useFormik } from "formik";
import * as yup from "yup"
import { TextField } from "@material-ui/core";
import Button from "@restart/ui/esm/Button";


const AddNoteForm = (props)=>{
    const {formSubmit, heading, text} = props
    
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
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id = "title"
                name = "title"
                label = "title"
                margin = "normal"
                value = {formik.values.title}
                onChange = {formik.handleChange}
                error = {formik.touched.title && Boolean(formik.errors.title)}
                helperText = {formik.touched.title && formik.errors.title}
            />
            <br/>
             <TextField
                id = "body"
                name = "body"
                label = "body"
                margin = "normal"
                value = {formik.values.body}
                onChange = {formik.handleChange}
                error = {formik.touched.body && Boolean(formik.errors.body)}
                helperText = {formik.touched.body && formik.errors.body}
            />
            <br/>
            <Button type="submit" variant="outlined"> Submit </Button>
            <button
              type="button"
              className="outline"
              onClick={formik.handleReset}
            //   disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
        </form>
        </div>
    )
}

export default AddNoteForm