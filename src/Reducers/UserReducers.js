
const intialState = {
    isloading : false,
    userLoggedIn : false,
    data : {},
    errors : ""
}

const UserReducers = (state = intialState,action)=>{
    switch(action.type){
        case "CREATE-USER" : {
            return {...state, data : action.payload}
        }
        case "UPDATE_ERROR" : {
            return {...state, errors : action.payload}
        }
        case "CLEAR_ERROR" : {
            return {...state, errors : ""}
        }
        default : {
            return {...state}
        }
    }
}

export default UserReducers