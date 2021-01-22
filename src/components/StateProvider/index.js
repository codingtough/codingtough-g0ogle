import React, { createContext, useContext, useReducer } from 'react';

//Preparing the data layer
export const StateContext = createContext();

//HOC High Order component
//initialState: What the data layer looks like when the app is loaded
//reducer: listen the changes, what we need in the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
   <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
   </StateContext.Provider>
);

//Hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);