import axios from "axios"
import { StartGetNote } from "./NotesActions"


export const StartUserUpdate = (formData,clearForm,props)=>{
    return (dispatch, getState)=>{
          axios.post("http://dct-user-auth.herokuapp.com/users/register",formData)
            .then((response)=>{
                const result = response.data
                console.log(result);
                if(result.hasOwnProperty('errors')){
                    alert(result.message)
                }else{
                    alert("Successfully created an account")
                    clearForm()
                    props.history.push('/login')
                }
            })
            .catch((error)=>{
                alert(error.message)
            })
    }
}

export const UserLogIn = (formData,userLoggedStatus,props)=>{
    return (dispatch,getState)=>{
        axios.post("http://dct-user-auth.herokuapp.com/users/login",formData)
            .then((response)=>{
                const result1 = response.data
                console.log(result1);
                if(result1.hasOwnProperty("errors")){
                    alert(result1.errors)
                } else{
                    localStorage.setItem('token', result1.token)
                    alert("Successfully logged in")
                    // dispatch(userloggedIn())
                    userLoggedStatus()
                    localStorage.token && dispatch(StartGetNote())
                    props.history.push("/")
                }
                
                
            })
            .catch((error)=>{
                alert(error.message)
            })
    }
}

export const getUserInfo = ()=>{
    return (dispatch)=>{
        axios.get("http://dct-user-auth.herokuapp.com/users/account",{
            headers : {
                "x-auth" : localStorage.getItem("token")
            }
        })
        .then((response)=>{
            console.log(response.data);
             dispatch(CreateUser(response.data))
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }
}

export const CreateUser = (user)=>{
    return {
        type: "CREATE-USER",
        payload : user
    }
}

// export const userloggedIn = ()=>{
//     return{
//         type: "USER-LOG-IN" 
//     }
// }

// export const userLoggedOut = ()=>{
//     return {
//         type : "USER-LOGGED-OUT"
//     }
// }
