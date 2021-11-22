import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AddNoteForm from "./AddNoteForm";
import DisplayNote from "./DisplayNote";
import { StartAddNote, StartGetNote } from "../../Actions/NotesActions";

import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    gridStyle: {
        marginTop: "20px",
    }
})

const NotesContainor = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        dispatch(StartGetNote())
    }, [])

    const formSubmit = (noteFormData) => {
        dispatch(StartAddNote(noteFormData))
    }

    return (
        <div className="notesStyle">
            <Grid container spacing={1}>
                <Grid item xs={12} md={8} className={classes.gridStyle}>
                    <DisplayNote />
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridStyle}>
                    <AddNoteForm formSubmit={formSubmit} />
                </Grid>
            </Grid>
        </div>
    )

}

export default NotesContainor

