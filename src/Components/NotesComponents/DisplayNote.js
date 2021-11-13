import React from "react";
import { useSelector } from "react-redux";
import NoteItem from "./NoteItem";
import { makeStyles } from "@material-ui/styles";
import { TextField, Typography } from "@material-ui/core";



const useStyles = makeStyles({
    formStyle : {
        margin : "0px auto",
        padding : "30px",
        borderRadius : "9px",
        boxShadow : "0px 0px 12px -3px #000000",
        display : "fles",
        justifyContent : "space-between",
        backgroundColor : '#fffde7',
        
    },
    headingStyle : {
        textAlign : "center"
    }

})

const DisplayNote = (props)=>{
    const classes = useStyles()
    const data = useSelector((state)=>{
        return state.notes
    })
    
    return (
        <div className={classes.formStyle}>        
            <Typography variant = "h4" align="center"> My Notes - {data.length} </Typography>
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