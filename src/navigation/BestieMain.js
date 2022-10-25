import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/Bestie/Dashboard';
import Support from '../screens/Bestie/Support';
import SupportMessage from '../screens/Bestie/SupportMessage';
import SupportChat from '../screens/Bestie/SupportChat';

const Stack = createStackNavigator();

function BestieMain(props) {
  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="Message" component={SupportMessage} />
      <Stack.Screen name="Chat" component={SupportChat} />
    </Stack.Navigator>
  );
}

export default BestieMain;
