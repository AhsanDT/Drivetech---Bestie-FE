import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../../screens/Bestie/Dashboard';
import Support from '../../screens/Bestie/Support';

const Stack = createStackNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Support"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Support" component={Support} />
    </Stack.Navigator>
  );
}

export default HomeStack;
