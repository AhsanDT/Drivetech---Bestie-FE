import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PaymentMethod from '../screens/EndUser/PaymentMethod';
import AddCard from '../screens/EndUser/AddCard';
import CardDetails from '../screens/EndUser/CardDetails';
import EditCard from '../screens/EndUser/EditCard';

const Stack = createStackNavigator();

function EndUserMain(props) {
  return (
    <Stack.Navigator
      initialRouteName="PaymentMethod"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="CardDetails" component={CardDetails} />
      <Stack.Screen name="EditCard" component={EditCard} />
    </Stack.Navigator>
  );
}

export default EndUserMain;
