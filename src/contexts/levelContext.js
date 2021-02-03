import React, { createContext, useReducer } from 'react';
import { levelReducer } from '../reducers/levelReducer';

export const LevelContext = createContext();

const screen = {
  width: window.innerHeight * 1.777,
  height: window.innerHeight,
  margin: 'auto'
}


const LevelContextProvider = props => {
  const [levelAttributes, dispatch] = useReducer(levelReducer, screen); //useReducer accepts a reducer of type (state,action)=> NewState,and returns the new state passed with a dispatch method
  return (
    <LevelContext.Provider value={{ levelAttributes, dispatch }}>
      {props.children}
    </LevelContext.Provider>
  );
};

export default LevelContextProvider;