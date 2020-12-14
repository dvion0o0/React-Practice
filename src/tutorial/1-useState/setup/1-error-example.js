import React from 'react';


let title = "Random Title"
const handler = () =>{
  title = "Hello"
  console.log(title);
}

const ErrorExample = () => {
  return  ( 
    <>
    <h1>{title}</h1>
    <button className="btn" type="submit" onClick={handler}>Change Title</button>
    </>
  )
};

export default ErrorExample;
