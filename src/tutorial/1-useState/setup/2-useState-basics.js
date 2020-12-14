import React, { useState } from 'react';

const UseStateBasics = () => {

  const [text, setText] = useState("random title");
const handler = () => {
  if(text === "random title"){
    setText("Hello");
  }else{
    setText("random title");
  }
}

  return (
    <>
    <h1>{text}</h1>
    <button className="btn" type="submit" onClick={handler}>Change Title</button>
    </>
  );
};

export default UseStateBasics;
