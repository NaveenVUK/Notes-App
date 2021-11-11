import React, { useState } from "react";
import { useDispatch } from "react-redux";
import EditNote from "./EditNote";
import { StartRemoveNote } from "../../Actions/NotesActions";


const NoteItem = (props)=>{
    const {_id, title, body} = props
    const [editToggle, setEditToggle] = useState(false)
    const dispatch = useDispatch()


    const handleRemoveClick = ()=>{
        const confirmation = window.confirm("Are you Sure")
        confirmation && dispatch(StartRemoveNote(_id))
    }

    const editToggleChange = ()=>{
        const result = !editToggle
        setEditToggle(result)
    }

    return(
        <div>
            {editToggle ? (
                <>
                    <EditNote id={_id} title={title} body={body} editToggleChange={editToggleChange}/>
                    <button onClick={editToggleChange}> Cancel </button>
                </>
            ):(
                <>
                    <li> {title} </li>
                    <button onClick={editToggleChange}> Edit </button>
                    <button onClick={handleRemoveClick}> Delete </button>
                </>
            )}
        </div>
    ) 
}

export default NoteItem