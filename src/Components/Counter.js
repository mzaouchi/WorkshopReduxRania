import { useDispatch, useSelector } from "react-redux"
import { changeTextP, decrement, increment } from "../Redux/Actions"

const Counter=()=>{
    const count = useSelector(state => state.count)
    const textP = useSelector(state => state.textP)
    const dispatch  = useDispatch()
    return(
        <div>
            <h2>Counter Component</h2>
            <button onClick={()=> count > 0 && dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={()=> dispatch(increment())}>+</button>
            <br/>
            <br/>
            <h2>{textP}</h2>
            <input type="text" onChange={(e)=> dispatch(changeTextP(e.target.value))} />
        </div>
    )
}

export default Counter