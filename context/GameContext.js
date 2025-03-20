import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();
export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [character, setCharacter] = useState(null);
  const [score, setScore] = useState(0);

  return (
    <GameContext.Provider value={{ character, setCharacter, score, setScore }}>
      {children}
    </GameContext.Provider>
  );
};
