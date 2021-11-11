import React from "react";
import { useSelector } from "react-redux";
import NoteItem from "./NoteItem";

const DisplayNote = (props)=>{

    const data = useSelector((state)=>{
        return state.notes
    })
    
    return (
        <div>        
            <h1> My Notes - {data.length}</h1>
            
                {data.length !== 0 ? (
                    <ul>
                       {data.map((ele)=>{
                            return <NoteItem key={ele._id} {...ele} />
                       })}
                    </ul>
                    ):(
                        <p> No notes found </p>
                    )}
        </div>
    )
}

export default DisplayNote