import axios from "axios"
import { StartGetNote } from "./NotesActions"
import swal from "sweetalert"
import { AlternateEmail } from "@material-ui/icons"

export const StartUserUpdate = (formData, props) => {
    return (dispatch, getState) => {
        axios.post("http://dct-user-auth.herokuapp.com/users/register", formData)
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    dispatch(UpdateError(result.message))
                } else {
                    swal("Successfully created an account !!")
                    props.history.push('/login')
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

export const UserLogIn = (formData, userLoggedStatus, props) => {
    return (dispatch, getState) => {
        axios.post("http://dct-user-auth.herokuapp.com/users/login", formData)
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty("errors")) {
                    dispatch(UpdateError(result.errors))
                } else {
                    localStorage.setItem('token', result.token)
                    swal("Successfully logged in !!")
                    userLoggedStatus()
                    localStorage.token && dispatch(StartGetNote())
                    props.history.push("/")
                }

            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

export const UpdateError = (error) => {
    return {
        type: "UPDATE_ERROR",
        payload: error
    }
}

export const getUserInfo = () => {
    return (dispatch) => {
        axios.get("http://dct-user-auth.herokuapp.com/users/account", {
            headers: {
                "x-auth": localStorage.getItem("token")
            }
        })
            .then((response) => {
                dispatch(CreateUser(response.data))
            })
            .catch((error) => {
                AlternateEmail(error.message)
            })
    }
}

export const CreateUser = (user) => {
    return {
        type: "CREATE-USER",
        payload: user
    }
}

export const clearError = () => {
    return {
        type: "CLEAR_ERROR",
    }
}
