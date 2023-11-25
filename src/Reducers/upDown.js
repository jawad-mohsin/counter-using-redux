const { act } = require("react-dom/test-utils");

const initialState = 10;

const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export default changeNumber;
