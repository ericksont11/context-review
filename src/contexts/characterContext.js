import React, { createContext, useReducer } from 'react';
import { characterReducer } from '../reducers/characterReducer';

export const CharacterContext = createContext();

const characterState = {
  name: 'Noah',
  top: '93%',
  left: '1%',
  jumpSpeed: 10,
  speed: 1,
  isJumping: false
}

const CharacterContextProvider = props => {
  const [characterAttributes, dispatch] = useReducer(characterReducer, characterState); 

  return (
    <CharacterContext.Provider value={{ characterAttributes, dispatch }}>
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;