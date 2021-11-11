
const intialState = {
    isloading : false,
    userLoggedIn : false,
    data : {},
    errros : []
}

const UserReducers = (state = intialState,action)=>{
    switch(action.type){
        case "CREATE-USER" : {
            return {...state, data : action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default UserReducers