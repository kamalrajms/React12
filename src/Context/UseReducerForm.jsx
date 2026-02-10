import React, { useReducer } from "react";

export default function UseReducerForm() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  function formReducer(state, action) {
    return {
      ...state,
      [action.field]: action.value,
    };
  }

//   action = { 
//     field: e.target.name, 
//     value: e.target.value };

  const [state, dispatch] = useReducer(formReducer, initialState);

  function handleInput(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
  }
  return (
    <div>
      <h2>UseReducer Form</h2>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleInput}
        placeholder="enter a name"
      />
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleInput}
        placeholder="enter a email"
      />
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handleInput}
        placeholder="enter a Password"
      />
    </div>
  );
}
