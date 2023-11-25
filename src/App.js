import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./Actions/index";

function App() {
  const myState = useSelector((state) => {
    return state.changeNumber;
  });

  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Increment & Decrement Counter</h1>
      <h4>Using React & Redux</h4>
      <div className="quantity">
        <a
          style={{ cursor: "pointer" }}
          className="quantity-minus"
          title="Decrement"
          onClick={() => {
            dispatch(decNumber(5));
          }}
        >
          <span>-</span>
        </a>
        <input
          className="quantity-input"
          name="quantity"
          type="text"
          value={myState <= 0 ? "0" : myState}
        />
        <a
          style={{ cursor: "pointer" }}
          className="quantity-plus"
          title="Increment"
          onClick={() => {
            dispatch(incNumber(5));
          }}
        >
          <span>+</span>
        </a>
      </div>
    </div>
  );
}

export default App;
