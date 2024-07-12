import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [data,setData] = useState([])
    
    const getData = ()=>{
        // fetch("http://localhost:3333/addUser",{
        //     method:"POST"
        // })
        // .then((responce)=>{return responce.json()})
        // .then((result)=>{setData(result.data)})
        // .catch((error)=>{console.log(error)})

        fetch("http://localhost:8000/himanshu",{
            method:"Post"
        })
        .then((response)=>{return response.json()})
        .then((result)=>{setData(result.users)})
        .catch((error)=>{console.log(error)})
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
      
      {data.map((key,value)=>{
        return(
            <>
            <p>{key._id}</p>
            <p>{key.username}</p>
            <p>{key.password}</p>
            <p>{key.Gender}</p>
            <p>{key.Email}</p>
            <hr />
            </>
            
        )
      })}

    </div>
  )
}

export default FetchApi