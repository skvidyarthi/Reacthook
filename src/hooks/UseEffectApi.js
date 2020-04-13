import React from 'react';
import Contacts from '../Contact/Contact';
import {useState, useEffect} from "react";

const UseEffectApi =() =>{  
    const [dishes, setDishes] = useState([]);
    const [info, setInfo] =useState([]);

    const fetchDishes= async (props) =>{
        const res= await fetch("https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes");
        const data=await res.json();
        setDishes(data);
    };

    const fetchInfo=async (props) => {
      const info=await fetch('https://jsonplaceholder.typicode.com/users');
      const infoData=await info.json();
      setInfo(infoData);
    }

    useEffect(()=>{
        fetchDishes();
        fetchInfo();
    }, []);

    return (      
        <div>
        <h1>UseEffect Api Call Example</h1>       
        {dishes.map(dish => (
              <article className="dish-card dish-card--withImage">
                <h3>{dish.name}</h3>
                <p>{dish.desc}</p>
                <div className="ingredients">
                  {dish.ingredients.map(ingredient => (
                    <span>{ingredient}</span>
                  ))}
                </div>
              </article>
            ))}  
            <Contacts contacts={info}/>
                         
        
        </div>

        
    );

}
export default UseEffectApi;