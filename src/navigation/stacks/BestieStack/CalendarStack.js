import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../../screens/Auth/Login';

const Stack = createStackNavigator();

function CalendarStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default CalendarStack;
