import React from "react";
import AddNoteForm from "./AddNoteForm";
import { StartUpdateNote } from "../../Actions/NotesActions";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";

const EditNote = (props)=>{
    const dispatch = useDispatch()
    const {data,handleToggle} = props



    const formSubmit=(noteFormData,NoteFormClear)=>{
        const newData = {...noteFormData, id : data._id}
        console.log(newData);
        handleToggle()
        dispatch(StartUpdateNote(newData,NoteFormClear))
    }



    return (
        <div>
            <h1> EditNote</h1>
            <AddNoteForm  handleToggle={handleToggle} formSubmit={formSubmit} id={data._id} heading={data.title} text={data.body}/>
        </div>
    )
}

const newData = withRouter(EditNote)
export default newData 