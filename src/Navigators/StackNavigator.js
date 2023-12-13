import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './BottomTabNavigator';
import Login from '../screens/Login/Login';
import SendMoney from '../screens/SendMoney';

const StackNavigator = () => {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
         <Stack.Screen
         name='Login'
         component={Login}
         />
            <Stack.Screen
                name={"MyTabs"}
                component={MyTabs}
            />
            <Stack.Screen
                name={"SendMoney"}
                component={SendMoney}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default StackNavigator;
