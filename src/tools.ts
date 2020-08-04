import React from "react";

export const StateContext = React.createContext({
  token: "",
});
export const DispatchContext = React.createContext({ type: "" });
