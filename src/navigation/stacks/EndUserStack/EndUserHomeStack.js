import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../../../screens/App/Bestie/Dashboard';

const Stack = createStackNavigator();

function EndUserHomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Support"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      {/* <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="Message" component={SupportMessage} />
      <Stack.Screen name="Chat" component={SupportChat} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="EditCard" component={EditCard} />
      <Stack.Screen name="Setting" component={Setting} /> */}
    </Stack.Navigator>
  );
}

export default EndUserHomeStack;
