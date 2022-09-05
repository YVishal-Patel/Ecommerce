import React, {useState} from 'react'

const JustLike = () => {
    const [ increment, setIncrement] = useState(0)
    const [decrement, setDecrement] = useState(0)

    const Incre = () =>{
        setIncrement((prev)=> prev+5)
    }
    const Decre = () =>{
        setDecrement((prev)=> prev-1)
    }

    const setValue = ()=>{
        for(let i=0;i<5;i++){
            for(let j=i+1;j<i+2;j++){
               Incre()
            }
            for(let k=i+1;k<i+2;k++){
                Decre();
            }
        }
    }
  return (
    <>
    <span>{increment}</span>
    <span>{decrement}</span>
    <button onClick={setValue}>click me</button>
    </>
  )
}

export default JustLike