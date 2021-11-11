
const initialState = []

const NotesReducers = (state=initialState, action)=>{
    switch(action.type){
        case "ADD-NOTE" : {
            // action.payload.map((ele)=>{
            //     if(Object.values(state).includes(ele._id)){
            //         return [...state]
            //     }else{
            //          return [...state, {...action.payload}]
            //     }
            // })
             return [...action.payload]
        }
        case "ADD-NOTE-REDUX":{
            return [action.payload,...state]
        }
        case "DELET-NOTE" : {
             const newState = state.filter((ele)=>{
                 return ele._id !== action.payload._id
             })
             return [...newState]

        }
        case "UPDATE-NOTE" : {
            console.log("action",action.payload);
            const updatedState = state.map((ele)=>{
                if (ele._id === action.payload._id){
                    return {...ele, ...action.payload}
                } else{
                    return {...ele}

                }
            })
            return [...updatedState] 
        }
        default:{
            return state
        }
    }
}

export default NotesReducers