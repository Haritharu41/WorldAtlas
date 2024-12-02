// import React from "react"
import { useRouteError } from "react-router-dom"


export const ErrorPage=()=>{
    const error=useRouteError();
    console.log(error);
    
    return(
       <>
       <h1>OOps!! An error occurred</h1>
       
      <p>{error.data}</p>
      <p>{error.status}</p>
      <p>{error.statusText}</p>
       
       </>
    )
}