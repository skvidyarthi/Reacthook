import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllPosts(){
  const [posts, setPost]=useState([]);

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

  return(
    <div>
    <center><h1 className="header"> All Current Posts(React Hook)</h1></center>
    {posts.map((post)=>(
        <div className="card">
        <div className="card-body">
          <h5 className="card-title" key={post.id}>{post.id}</h5>
          <h6 className="card-subtitle mb-2 text-muted" >{post.title}</h6>
          <p className="card-text">{post.body}</p>
        </div>
      </div>
    )
    )}
    </div>
)

}
  
  export default AllPosts;