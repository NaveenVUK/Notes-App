import React, { useState } from "react";
import Inputfeild from "../ReusableComponets/Inputfield";
const AddNoteForm = (props)=>{
    const {formSubmit, heading, text} = props
    
    const [title, setTitle] = useState(heading ? heading : "")
    const [textBody, setTextBody] = useState(text ? text : "")

    const handleBodyChange = (e)=>{
        setTextBody(e.target.value)
    }

    const handleSubmite=(e)=>{
        e.preventDefault()
        const noteFormData = {
            title : title,
            body : textBody
        }
        formSubmit(noteFormData,NoteFormClear,)
        
    }

    const NoteFormClear = ()=>{
        setTextBody("")
        setTitle("")
    }

    return (
        <form onSubmit={handleSubmite}>
            <Inputfeild name="text" sta={title} change={setTitle} placeholder="Title"/><br/>
            <textarea placeholder="body" value={textBody} onChange={handleBodyChange} /> <br/>
            <input type="submit" value="Save"/>
        </form>
    )
}

export default AddNoteForm