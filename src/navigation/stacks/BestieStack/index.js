import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Support from '../../../screens/App/Support';
import SupportMessage from '../../../screens/App/SupportMessage';
import SupportChat from '../../../screens/App/SupportChat';
import EditCard from '../../../screens/App/EditCard';
import Setting from '../../../screens/App/Setting';
import SelectPaymentMethod from '../../../screens/App/SelectPaymentMethod';
import GetPaymentList from '../../../screens/App/GetPaymentList';
import AddCard from '../../../screens/App/AddCard';

const Stack = createStackNavigator();

function StackNavigation(props) {
  return (
    <Stack.Navigator
      initialRouteName="Support"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="Message" component={SupportMessage} />
      <Stack.Screen name="Chat" component={SupportChat} />
      <Stack.Screen name="GetPaymentList" component={GetPaymentList} />
      <Stack.Screen
        name="SelectPaymentMethod"
        component={SelectPaymentMethod}
      />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="EditCard" component={EditCard} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
