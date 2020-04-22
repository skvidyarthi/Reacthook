import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CityData from '../City/CityData';

function useWindowDiemention(){
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(()=>{
    const listner=()=>{
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener("resize", listner)
  })

  return {
    width,
    height
  }
}

function Wait({delay=1000, placeholder, ui}){
const [show, setShow]= useState(false);

useEffect(()=>{
const id=setTimeout(()=>{
  setShow(true)
}, delay)
return ()=>window.clearTimeout(id)
}, [delay])

return show ===true? ui : placeholder 
}

function AllPosts(){
  const [posts, setPost]=useState([]);
  const [input, setInput] = useState('');

useEffect(()=>{
document.title=`${24-input.length} characters remain`;
  }, [input])

useEffect(()=>{
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(res=>{
           console.log(res)
           setPost(res.data)
        })
        .catch(err=>{
          console.log(err);
        })
  }, []);

  const { width, height } = useWindowDiemention();

  return(
    <div>
   <h2>Width:{width}</h2>
   <h2>Height:{height}</h2>
   <p>Resize the window</p>
    <center><h1 className="header"> All Current Posts(React Hook)</h1></center>
    <textarea type="text" value={input} placeholder="type please" onChange={(e)=>setInput(e.target.value)} />
    <button disabled={input.length===0 || input.length > 24} onClick={()=>console.log(input)}>Submit</button>
    <div className="charcter"></div>
    {posts.map((post)=>(
        <div className="container card col-lg-6">
        <div className="card-body">
          <h5 className="card-title" key={post.id}>{post.id}</h5>
          <h6 className="card-subtitle mb-2 text-muted" >{post.title}</h6>
          <p className="card-text">{post.body}</p>
        </div>
      </div>
    )
    )}

    <Wait delay={3000} placeholder={<p>Wating...</p>} ui={<CityData/>} />
    </div>
)
}
export default AllPosts;