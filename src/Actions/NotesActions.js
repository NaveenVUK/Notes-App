import axios from "axios"
import swal from "sweetalert"


export const StartAddNote = (noteFormData)=>{
    return (dispatch)=>{
        axios.post('http://dct-user-auth.herokuapp.com/api/notes', noteFormData, {
                headers : {
                    "x-auth" : localStorage.getItem("token")
                }
            })
            .then((response)=>{
                const data= response.data
                if(data.hasOwnProperty("errors")){
                    alert(data.error)
                } else{
                    swal("Note has been updated !!")
                    dispatch(AddNoteinRedux(data))
                }
            })
            .catch((error)=>{
                alert(error.message)
            })
    }
}

export const AddNoteinRedux = (data)=>{
    return {
        type : "ADD-NOTE-REDUX",
        payload : data
    }
}

export const StartGetNote = (props)=>{
    return (dispatch)=>{
        axios.get("http://dct-user-auth.herokuapp.com/api/notes",{
            headers : {
                "x-auth" : localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty("errors")){
                alert(result.error)
            } else{
                dispatch(AddNote(result))
            }
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
}

export const AddNote = (note)=>{
    return {
        type: "ADD-NOTE",
        payload : note
    }
}

export const StartRemoveNote = (id)=>{
    return (dispatch)=>{
        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,{
            headers : {
                "x-auth" : localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty("erros")){
                alert(result.error)
            } else{
                dispatch(deletNote(result))
            }
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
}

export const deletNote = (note)=>{
    return {
        type : "DELET-NOTE",
        payload : note
    }
}

export const StartUpdateNote = (noteFormData,)=>{
    return (dispatch)=>{
        axios.put(`http://dct-user-auth.herokuapp.com/api/notes/${noteFormData.id}`,noteFormData,{
            headers : {
                "x-auth" : localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty("errors")){
                alert(result.errros)
            }else{
                dispatch(updateNote(result))
                // NoteFormClear()
            }
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
}

export const updateNote = (note)=>{
    return {
        type : "UPDATE-NOTE",
        payload : note
    }
}