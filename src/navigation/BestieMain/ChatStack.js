import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../../screens/Bestie/Dashboard';

const Stack = createStackNavigator();

function ChatStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

export default ChatStack;
