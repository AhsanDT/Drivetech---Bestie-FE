import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../../screens/Auth/Login';
import Dummy from '../../../screens/App/Bestie/Dummy';

const Stack = createStackNavigator();

function MapStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dummy" component={Dummy} />
    </Stack.Navigator>
  );
}

export default MapStack;
