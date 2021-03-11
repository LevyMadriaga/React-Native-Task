import React from 'react'
import { View, Text, Stylesheet } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home'
import AddTaskScreen from './AddTaskScreen'
import UpdateTaskScreen from './UpdateTaskScreen'

const Stack = createStackNavigator();

export default function AllScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'My Task'}}
        />
        <Stack.Screen 
          name="AddTask" 
          component={AddTaskScreen} 
            options={{ title: 'New Task'}}
        />
        <Stack.Screen 
          name="UpdateTask" 
          component={UpdateTaskScreen} 
            options={{ title: 'Update Task'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
