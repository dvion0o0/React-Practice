import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
const reset = () => {
  setValue(0);
}

const complex = () => {
  setTimeout( () =>{
    setValue((prev) => {
      return prev + 1;
    });
  }, 3000);
}

  return (
    <>
    <section style={{margin: '4rem 0'}}>
<h2>Regular Counter</h2>
<h1>{value}</h1>
<button className="btn" onClick={() => setValue(value - 1)}>Decrease</button>
<button className="btn" onClick={reset}>Reset</button>
<button className="btn" onClick={() => setValue(value + 1)}>Increase</button>
    </section>
    <section style={{margin:'5rem 0'}}>
      <h2>Complex Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={complex}>Complex Increse</button>
    </section>
    </>
  );
};

export default UseStateCounter;
