import React, { useState } from 'react';


const UseStateObject = () => {
  const [people, setPeople] = useState({
  name:"Peter",
  age:26,
  message:"Hi it's Peter here."
  });
const change = () => {
  setPeople({...people, message:"Hello"});
}

  return (
    <>
    <h2>{people.name}</h2>
    <h2>{people.age}</h2>
    <h2>{people.message}</h2>
    <button className="btn" onClick={change}>Change Message</button>
    </>
  )
};

export default UseStateObject;
