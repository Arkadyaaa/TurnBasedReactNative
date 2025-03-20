import React, { createContext, useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GameProvider } from './context/GameContext';
import MainMenu from './screen/MainMenu';
import CharacterSelect from './screen/CharacterSelect';
import Game from './screen/Game';
import EndScreen from './screen/EndScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GameProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainMenu" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainMenu" component={MainMenu} />
          <Stack.Screen name="CharacterSelect" component={CharacterSelect} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="EndScreen" component={EndScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
}
