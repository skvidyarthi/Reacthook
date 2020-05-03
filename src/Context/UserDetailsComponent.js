import React, { useState } from "react";

var userDetailContext = React.createContext(null);

export default function UserDetailsComponent() {
 const [userDetails, setDetails]=useState({name:"Ashish", age:30})

  return (
    <userDetailContext.Provider value={userDetails}>
    <div className="container">
    <h1>Context Api Demo</h1>
      <h2>This is the Parent Component </h2>
      <button onClick={()=>setDetails({name:"Pujan", age:34})}>Update Value</button>
      <hr />
      <ChildComponent />
      </div>
    </userDetailContext.Provider>
  );
}

function ChildComponent() {
  return (
    <div>
      <h2>This is Child Component</h2>
      <hr />
      <SubChildComponent />
    </div>
  );
}

function SubChildComponent(props) {
  var contextData = React.useContext(userDetailContext);
  return (
    <div>
      <h3>This is Sub Child Component</h3>
      <h4>User Name: {contextData.name}</h4>
      <h4>User Age: {contextData.age}</h4>
     
    </div>
  );
}
