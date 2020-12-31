import React, { useState, useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const [name, setName] = useState("");

  const refContainer = useRef(null);
  const handleChange = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <form className="form" onSubmit={handleChange}>
      <input type="text" ref={refContainer} />
      <button type="submit" className="btn">
        submit
      </button>
    </form>
  );
};

export default UseRefBasics;
