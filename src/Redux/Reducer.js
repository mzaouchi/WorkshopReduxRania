import { CHANGETEXTP, DECREMENT, INCREMENT } from "./ActionTypes"

const initialState = {
    count : 0,
    textP : ''
}

const Reducer=(state = initialState,action)=>{
    switch (action.type) {

        case INCREMENT : return {...state, count : state.count + 1}

        case DECREMENT : return {...state, count : state.count - 1}

        case CHANGETEXTP : return {...state, textP : action.payload}

        default: return state
    }
}

export default Reducer