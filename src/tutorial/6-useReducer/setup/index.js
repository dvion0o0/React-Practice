import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModal: true,
      modalContent: "item Added",
    };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, isModal: true, modalContent: "Please enter value" };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModal: false, modalContent: "" };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter((item) => {
      return item.id !== action.payload;
    });
    return { ...state, people: newPeople };
  }
  throw new Error("no matching type found");
};

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
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModal && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
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
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: id });
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
