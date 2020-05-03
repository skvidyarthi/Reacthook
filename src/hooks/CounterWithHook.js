import React, {useState, useEffect, useRef} from 'react';

 export default function Counter(){
const [count, setCount]=useState(0);
const id=useRef(null)

const clearInterval=()=>{
    window.clearInterval(id.current)
}

const startInterval=()=>{
    window.startInterval(id.current)
}

useEffect(()=>{
    id.current= window.setInterval(()=>{
        setCount(c=>c+1)
    }, 1000)
    return clearInterval
}, [])



return (
    <div>
      <h1>{count}</h1>
      <button onClick={clearInterval}>Stop</button>
      <button onClick={startInterval}>Start</button>
    </div>
  )

}


export function Form () {
    const nameRef = React.useRef()
    const emailRef = React.useRef()
    const passwordRef = React.useRef()
  
    const handleSubmit = e => {
      e.preventDefault()
  
      const name = nameRef.current.value
      const email = emailRef.current.value
      const password = passwordRef.current.value
  
      console.log(name, email, password)
    }

    const handleReset=()=>{
        nameRef.current.value=""
        emailRef.current.value=""
        passwordRef.current.value=""
    }
  
    return (
      <React.Fragment>
      <div className="container">
        <label>
          Name:
          <input 
            placeholder="name"
            type="text"
            ref={nameRef} 
          />
        </label>
        <label>
          Email:
          <input 
            placeholder="email"
            type="email"
            ref={emailRef} 
          />
        </label>
        <label>
          Password:
          <input 
            placeholder="password"
            type="password"
            ref={passwordRef} 
          />
        </label>
  
        <hr />
  
        <button onClick={() => nameRef.current.focus()}>
          Focus Name Input
        </button>
        <button onClick={() => emailRef.current.focus()}>
          Focus Email Input
        </button>
        <button onClick={() => passwordRef.current.focus()}>
          Focus Password Input
        </button>
  
        <hr />
  
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleReset}>Reset</button>
        </div>
      </React.Fragment>
    )
  }