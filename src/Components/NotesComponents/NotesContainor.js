import React,{useEffect} from "react";
import AddNoteForm from "./AddNoteForm";
import DisplayNote from "./DisplayNote";
import { useDispatch } from "react-redux";
import { StartAddNote } from "../../Actions/NotesActions";
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { StartGetNote } from "../../Actions/NotesActions";


const NotesContainor = ()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(StartGetNote())
    },[])
    
    

    const formSubmit=(noteFormData)=>{
        dispatch(StartAddNote(noteFormData))
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Paper> <DisplayNote/> </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper> <AddNoteForm formSubmit={formSubmit}/> </Paper>
                </Grid>
            </Grid>
        </div>
    )

}

export default NotesContainor