import {QuizzReducer} from "./Quizz-reducer";
import {combineReducers, createStore} from "redux";


const reducer = combineReducers({
    QuizzReducer
})

const store = createStore(reducer)

window.store = store

export default store