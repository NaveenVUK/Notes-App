import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import UserReducers from "../Reducers/UserReducers"
import NotesReducers from "../Reducers/NotesReducers"

const ConfigureStore = ()=>{
    const store = createStore(combineReducers({
        users : UserReducers,
        notes : NotesReducers,
    }),applyMiddleware(thunk))
    return store
}

export default ConfigureStore