import React, {useState, useEffect, useRef} from 'react';

 export default function ClickTimerGame(){
const [count, setCount]=useState(0);
const [timeleft, setTimeleft]= useState(10)
const id=useRef(null)

const clearInterval=()=>{
    window.clearInterval(id.current)
}

useEffect(()=>{
    id.current= window.setInterval(()=>{
        setTimeleft((time)=>time-1)
    }, 1000)
    return clearInterval
}, [])

useEffect(()=>{
    if(timeleft===0){
        clearInterval() 
    }
},[timeleft])


const h3text= (timeleft===0) ? "Time Out" : "Time Left";
return (
    
    <div className="container mt-4 text-center">
      <h1>Click and Count</h1>
      <h2>{count}</h2>
     
      <h3>{h3text} : {timeleft}</h3>
      {timeleft===0 ? null :
      <button onClick={()=>setCount((c)=>c+1)}>+</button>
      }
    </div>
  )

}
