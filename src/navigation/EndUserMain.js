import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PaymentMethod from '../screens/EndUser/PaymentMethod';
import AddCard from '../screens/EndUser/AddCard';
import CardDetails from '../screens/EndUser/CardDetails';
import EditCard from '../screens/EndUser/EditCard';
import Setting from '../screens/EndUser/Setting';

const Stack = createStackNavigator();

function EndUserMain(props) {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="CardDetails" component={CardDetails} />
      <Stack.Screen name="EditCard" component={EditCard} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
}

export default EndUserMain;
