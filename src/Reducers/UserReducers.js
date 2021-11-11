
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
        // case "USER-LOG-IN":{
        //     return {...state, userLoggedIn : true}
        // }
        // case "USER-LOGGED-OUT":{
        //     return {...state, userLoggedIn : false}
        // }
        default : {
            return {...state}
        }
    }
}

export default UserReducers