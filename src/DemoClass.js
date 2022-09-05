import React, {useState, useRef} from 'react'
import arr from './Component/DemoClass'
import './Component/DemoFrom.css'


const DemoClass = () => {

  const ref = useRef()
  const anime = useRef()

  const [ids, setIds] = useState(0)
  const [restSecondId, setRestSecondsId] = useState(0)
  const [resId, setResId] = useState(0)
  const [number, setNumber] = useState(0) 
  const [second, setSeconds] = useState(0)

let clickValue;
let rest;

  const handleEvent = (e) =>{
    clickValue = e.target.value;
    setIds(clickValue)
  }

  const handleRest = (e) => {
     rest = e.target.value;
    setRestSecondsId(rest)
  }
  

  //  async function  totalData () {
  //     for(let i=0;i<2;i++){
  //     for (let j=i+1;j<i+2;j++){
  //    await(combinedData1())
  //     console.log(clickValue, "clickvalue")
  //   }
  //   for (let k=i+1;k<i+2;k++){
  //    await(combinedData())
  //   }
  // }
  // if(resId > 0){
  //   // totalData()
  // }else{
  //   return;
  // }
  
  // }
  let interval;
  let restTime;
  let newData = 0;

const combinedData = () =>{
  let workTime = ids
  setNumber(workTime);
  if(workTime>0){
      ref.current.style.animation = `dash-animation ${workTime}s ease infinite  , color 6s ease infinite`
      anime.current.style.animation = ` rotate ${workTime}s ease infinite`;
      }

  setInterval(function(){
  if(workTime <= 0){
    workTime = 0;
    clearInterval(workTime)
  }else{
    newData = 1;
    workTime = (workTime -1)
    setNumber(workTime)
  }
}, 1000)
 if(workTime == 0){
  combinedData1()
 }
}

const combinedData1 = () => {
  console.log("we are running")
  setSeconds(restSecondId)
    restTime =restSecondId;
   if(restTime>0){
    ref.current.style.animation = `dash-animation ${restSecondId}s ease infinite, color 6s ease `;
    anime.current.style.animation = ` rotate ${restSecondId}s ease infinite`;
    }
  //  restTime = Math.floor(restTime)
   console.log(second, "second")
  interval = setInterval(function(){
    if(restTime <= 0){
      clearInterval(restTime)
    }else{
      restTime = (restTime - 1)
      setSeconds(restTime)
    }
   },1000)
}

  // for(let i=0;i<resId;i++){
  //   for(let j=i+1;j<i+2;j++){
  //    setNumber(ids)
  //   }
  //   for(let k=i+1;k<i+2;k++){
  //     setRestSecondsId(restSecondId)
  //   }
  // }
  // if(number ==0){
    //  }
    // combineData1()

  // let number = ids;
//   console.log(number,'numbers')
//   setNumber(number)
//   if(number>0){
//   ref.current.style.animation = `dash-animation ${number}s ease infinite , color 6s ease infinite`
//   anime.current.style.animation = ` rotate ${number}s ease`;
//   }
//   setInterval(function(){
//     if(number == 0){clearInterval(number)}
//    else{ number = (number -1)
//     setNumber(number)}
//     console.log( "running")
//   },1000)
// }

// const combineData1 = () =>{
//   let data = restSecondId;
  // console.log(numberSecond, "numberSEcond")
  // setSeconds(data)
  // console.log(second,"second")
  // if(data>0){
  //   ref.current.style.animation = `dash-animation ${restSecondId}s ease infinite, color 6s ease `;
  //   }
  // setInterval(function(){
  //   if(data == 0){clearInterval(data)}
  //   else{
  //     setSeconds(data)
  //     data = (data -1)
  //   }
  //   setSeconds(data)
  // },1000)
// }
 

  return (<>
 <div className="container-fluid">
  <div className="row">
    <div className="col-8">
       <div className='w-100 svg-circle row m-0 '>
      <div className="svg-scaling loader-wrapper just-fy-content-center">
      <svg ref={anime} class="loader" viewBox="0 0 100 100">
        <circle ref={ref} class="path" cx='50' cy='50' r="20" fill="none" stroke-width='2' height='50' stroke-miter-limit="100"/>
      </svg>
    </div>
        <span className='timerNumber' >{number >0? `${number}`:`${second}`}</span>
    </div> 

   <div className='breath-circle w-75 row m-0 justify-content-center '>
    <div className='circle row text-center py-5 m-0 justify-content-center align-items-center cursor-pointer'>
      <div className='h3 m-0 align-self-start'></div>
      <div className='w-100 align-self-center text-light'>
        <div className='row m-0 justify-content-center align-items-center'>
          <span className='cursor-pointer ng-star-inserted'>
          <i onClick={combinedData} class="fas fa-play fa-2x"></i>
          </span>
        </div>
      </div>
      <div className='h3 m-0 align-self-end'></div>
    <span className='rest-data'>{number>0?`Long Squeeze`: `Rest Seconds`}</span>

    </div>
    </div>    
    </div>

    <div className="col-4">
      <div className="container squeeze-sidebar">
        <div className="squeeze-heading ">
          <span className="squ-head fs-5">Begineer</span>
        </div>
        <div className="sqe-data d-flex justify-content-between">
          <div className="d-flex flex-column">
          <label htmlFor="">Long Squeeze</label>
          <select onChange={(e)=>setIds(e.target.value) }>
            {arr[0].squeezeSeconds.map((item, idx)=>{
            return(<> <option  key={idx} value={item.squeezeData}>{item.squeezeData}</option>
          </> )
        })}
          </select>
          </div>

          <div className="d-flex flex-column">
          <label >Rest Seconds</label>
          <select  onChange={(e)=> setRestSecondsId(e.target.value) }>
            {arr[0].restSeconds?.map((restSecondsItems, idx)=>{
            return(<> <option onClick={restSecondsItems.id} key={idx} value={restSecondsItems.longSqueezeSeconds}>{restSecondsItems.longSqueezeSeconds}</option>
          </> )
        })}
          </select>
          </div>

          <div className="d-flex flex-column ">
          <label >Reps</label>
          <select onChange={(e)=>setResId(e.target.value)}>
            {arr[0].res.map((resItem, idx)=>{
            return(<> <option onClick={resItem.id} key={idx} value={resItem.longSqueezeTime}>{resItem.longSqueezeTime}</option>
          </> )
        })}
          </select>
          </div>

        </div>
      </div>
    </div>
  </div>
 </div>
  </>
  )
}

export default DemoClass