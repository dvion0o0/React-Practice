import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [value, setValue] = useState(window.innerWidth);
  const change = () => {
    setValue(window.innerWidth);
  }
  useEffect(() =>{
    window.addEventListener("resize", change);
    return () =>{
      window.removeEventListener('resize', change);
    }
  });

  return <>
  <h1>Window Size</h1>
  <h2>{value} Px</h2>
  </>;
};

export default UseEffectCleanup;
