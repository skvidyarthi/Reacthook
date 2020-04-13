import React, {Component} from 'react';
import './App.css';
import {useState, useRef, useEffect} from "react";
import { useTitleInput } from './hooks/useTitleInput';
import Counter from './hooks/Counter';
import UseEffectApi from './hooks/UseEffectApi';
import Contacts from './Contact/Contact';

// button tect change in Hook
function SignIn() {
    const [isShow, setShow] = useState(false);
    const ref=useRef();
    
  return (
    <div className="container App" ref={ref}>
    <h1 onClick={()=>ref.current.classList.add('header-list')}> This is React Hook Example!</h1>
      <header>       
       
        <hr/>
        <button onClick={()=>setShow(!isShow)}>
         {isShow ? "Logout" : "Login"}
        </button> 
        {isShow && 
          <Toggle />
        }       
        <UseEffectApi />
      </header>
      <Counter />
    </div>
  );
}


// input value render in Hook
function InputValueChange() {
  const [inputvalue, setInputValue] = useTitleInput('');
  
  return (
    <div className="container">  
    <form onSubmit={e=>{
     e.preventDefault();
     formSubmit(inputvalue, setInputValue);   
  }}>
  <input type="text" value={inputvalue} onChange={(e)=>setInputValue(e.target.value)} />
  <button>Submit</button>
   </form>
  
    </div>
  );
}

const Toggle =()=>{
const [isToggle, setToggle] = useState(false);

return(
  <div>
 <button onClick={()=>setToggle(!isToggle)}>Subscribe</button>
 {isToggle && 
  <InputValueChange />  
}
  </div>
);

}

  const formSubmit = (value, setInputValue) =>{
    if(value){
    alert("email sent to " + value);
    setInputValue("");    
    }
    else{
      alert("email is required");
    }
  }


export default SignIn;
