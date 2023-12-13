import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/Navigators/StackNavigator';
import { StatusBar } from 'react-native';

export default function App() {

  return (

    <NavigationContainer>
        <StatusBar
        backgroundColor={"white"}
        />
        <StackNavigator />
    </NavigationContainer>
  );
}