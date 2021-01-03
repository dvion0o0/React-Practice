import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
const reducer = (state, action) => {};

const defaultState = {
  people: [],
  isModal: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      // setIsModal(true);
      // setPeople([...people, { id: new Date().getTime.toString(), name }]);
      // setName("");
    } else {
      // setIsModal(true);
    }
  };
  return (
    <>
      {state.isModal && <Modal modalContent={state.modalContent} />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      {state.people.map((item) => {
        const { id, name } = item;
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
