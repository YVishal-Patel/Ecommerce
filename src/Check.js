import { useSelector, useDispatch } from 'react-redux'
import {Increment, Decrement} from './Action/index'


function Check() {
  
  const dispatch = useDispatch();

  const state = useSelector((state)=>state.rootReducer)
  return (
      <>
      <button onClick={()=> dispatch(Increment())}>+</button>
      <input type="number" value={state} />
      <button onClick={()=> dispatch(Decrement())}>-</button>
      </>
  )
}

export default Check