import React, { useState ,useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { StartRemoveNote , StartGetNote} from "../../Actions/NotesActions";
import EditNote from "./EditNote";
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

const DisplayNote = (props)=>{
    const dispatch = useDispatch()
    const [toggel, setToggel] =  useState(false)
    const [editData, setEditData] = useState({})
    
    const data = useSelector((state)=>{
        return state.notes
    })

    useEffect(()=>{
        dispatch(StartGetNote())
    },[])
    

    const handleRemoveClick = (id)=>{
        const confirmation = window.confirm("Are you Sure")
        confirmation && dispatch(StartRemoveNote(id))
    }

    const handleToggle = ()=>{
        const result = !toggel
        setToggel(result)
    }

    const handleEditChange = (notes)=>{
        setEditData(notes)
    }

    
    const handleClick = (id)=>{
        const findNote = data.find((ele)=>{
            return ele._id === id
        })
        alert(`${findNote.title} - ${findNote.body}`)
    }



    return (
        <div>        
            <h1> My Notes - {data.length}</h1>

            {toggel ? (
                <>
                    <EditNote data = {editData} handleToggle={handleToggle}/>
                    <button onClick={handleToggle}> Cancel </button>
                </>

            ) : (
                <>
                {data.length !== 0 ? (
                        <ul>
                            <Grid container spacing={3}
                             alignItems="flex-start"
                             direction="column"
                             justifyContent="center"
                             >
                                {data.map((ele)=>{
                                return (
                                    <Grid  
                                        item key={ele._id} 
                                        xs={12} md={12} lg={4}
                                    >
                                    <Paper>
                                        <Paper onClick={(e)=>{
                                            handleClick(ele._id)}
                                        } mx={{ height: 140, width: 100 }}>
                                             {ele.title} 
                                        </Paper>
                                        <Paper>
                                            <button onClick={()=>{
                                                handleToggle()
                                                handleEditChange(ele)
                                            }}> Edit </button> 
                                            <button onClick={()=>{
                                                handleRemoveClick(ele._id)
                                            }}> Remove </button>
                                        </Paper>
                                    </Paper>
                                    </Grid> 
                                )
                                
                            })}
                                
                            </Grid>
                            
                        </ul>
                    ):(
                        <p> No notes found </p>
                    )}
                </>
            )}
        </div>
    )
}

export default DisplayNote