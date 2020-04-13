import React, {useRef} from 'react';

const Contacts=({contacts})=>{
    const ref1=useRef();
    return(
        <div>
        <center><h1>Contact List</h1></center>
        {contacts.map((contact)=>(
            <div className="card">
            <div className="card-body">
              <h5 className="card-title" ref={ref1} onClick={()=>ref1.current.classList.add('header-list')}>{contact.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted" >{contact.email}</h6>
              <p className="card-text">{contact.company.catchPhrase}</p>
            </div>
          </div>
        )
        )}
        </div>
    )
}

export default Contacts

