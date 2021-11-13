import React from "react";
import AddNoteForm from "./AddNoteForm";
import { StartUpdateNote } from "../../Actions/NotesActions";
import { useDispatch } from "react-redux";

const EditNote = (props)=>{
    const dispatch = useDispatch()
    
    const {id, title, body ,editToggleChange} = props

    const formSubmit=(noteFormData)=>{
        const newData = {...noteFormData, id : id}
        editToggleChange()
        dispatch(StartUpdateNote(newData))
    }

    return (
        <div>
            <AddNoteForm  handleToggle={editToggleChange} formSubmit={formSubmit} id={id} heading={title} text={body}/>
        </div>
    )
}

export default EditNote 