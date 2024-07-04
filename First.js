import React, {useState} from 'react'

const First = () => {
    const [count, setCount]= useState(0);
    // const check =()=>{
    //   if (count>0) {
    //     setCount(count-1);
        
    //   }
    // }
  
  return (
    <div>useState
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>increase</button>
        {/* <button onClick={check}>decrease</button> */}

        {/* use ternary operator  */}
        <button onClick={()=> setCount(count > 0 ? count - 1 : count)}>increase</button>
    </div>
  )
}

export default First