import {useState, useDebugValue} from 'react';

function useTitleInput(initialvalue){
    const [value, setValue] = useState(initialvalue);
   
    useDebugValue(value.length>0 ? "Full" : "Empty");
    return [value, setValue];
}

export { useTitleInput }