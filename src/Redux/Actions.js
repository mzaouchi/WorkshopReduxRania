import { CHANGETEXTP, DECREMENT, INCREMENT } from "./ActionTypes"

export const increment=()=>{
    return(
        {
            type : INCREMENT
        }
    )
}

export const decrement=()=>{
    return(
        {
            type : DECREMENT
        }
    )
}

export const changeTextP=(payload)=>{
    return(
        {
            type : CHANGETEXTP,
            payload
        }
    )
}