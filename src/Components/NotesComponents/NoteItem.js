import React, { useState } from "react";
import { useDispatch } from "react-redux";
import EditNote from "./EditNote";
import { StartRemoveNote } from "../../Actions/NotesActions";
import { makeStyles } from "@material-ui/styles";
import { Button, Typography } from "@material-ui/core";
import { DeleteRounded } from "@material-ui/icons";
import { Edit } from "@material-ui/icons";
import swal from "sweetalert";

const useStyles = makeStyles({
    formStyle : {
        marginTop : "20px",
        padding : "30px",
        borderRadius : "9px",
        boxShadow : "0px 0px 12px -3px #000000",
        display : "fles",
        justifyContent : "space-between",
        color : "blue",
        backgroundColor : '#e8f5e9',
    },
    buttonStyle : {
        marginRight : "10px",
        marginTop : "10px",
        color : "red"
    }
})

const NoteItem = (props)=>{
    const {_id, title, body} = props
    const [editToggle, setEditToggle] = useState(false)
    const dispatch = useDispatch()
    const classes = useStyles()


    const handleRemoveClick = ()=>{
        // const confirmation = window.confirm("Are you Sure")
        swal({
            title: "Are you sure you want delete ths note?",
            text: "Once deleted, you will not be able to recover this note!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              dispatch(StartRemoveNote(_id));
              swal("Poof! Your note has been deleted!", { icon: "success",})
            } else {
              swal("Your note is safe!");
            }
          })
    }

    const editToggleChange = ()=>{
        const result = !editToggle
        setEditToggle(result)
    }

    const handleTitleClick = ()=>{
        alert(`${title} - ${body}`)
    }
    
    return(
        <div className={classes.formStyle}>
            {editToggle ? (
                <>
                    <EditNote id={_id} title={title} body={body} editToggleChange={editToggleChange}/>
                    <Button onClick={editToggleChange} 
                        className={classes.buttonStyle}
                        variant="outlined"
                        color="inherit"
                        > 
                    Cancel 
                    </Button>
                </>
            ):(
                <>
                    <Typography variant="h6" onClick={handleTitleClick}> {title} </Typography>
                    <Edit onClick={editToggleChange}
                         className={classes.buttonStyle}
                     />
                    <DeleteRounded onClick={handleRemoveClick}
                        className={classes.buttonStyle}
                    />
                </>
            )}
        </div>
    ) 
}

export default NoteItem