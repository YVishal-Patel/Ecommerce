import React, {useReducer} from 'react'

const DemoAction = () => {

    const initialState = {
    countValue:3
  }
    const Reducer = (state,action) =>{
      switch(action.type){
        case 'Increment':
            return {...state ,countValue:Math.abs(state.countValue+1)};
        case 'Decrement':
            return {...state ,countValue:Math.abs(state.countValue-1)};
      }
      return state;
    }

    const [todos, dispatch] = useReducer(Reducer,initialState)

  return (
     <>
     <div className="d-flex flex-column justify-content-center align-items-center">
    <p style={{textAlign:"center", marginTop:"1rem"}}>{todos.countValue}</p>
    <div className="d-flex justify-content-center">
    <button onClick={()=> dispatch({type:'Increment'})} className='mx-1'>Increment</button>
    <button onClick={()=> dispatch({type:'Decrement'})} className='mx-1'>Decrement</button>
    </div>
    </div>
     </>
  )
}

export default DemoAction