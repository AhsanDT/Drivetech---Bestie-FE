import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Support from '../../../screens/App/Support';
import SupportMessage from '../../../screens/App/SupportMessage';
import SupportChat from '../../../screens/App/SupportChat';
import PaymentMethod from '../../../screens/App/PaymentMethod';
import AddCard from '../../../screens/App/AddCard';
import EditCard from '../../../screens/App/EditCard';
import Setting from '../../../screens/App/Setting';
import CreateCard from '../../../screens/App/CreateCard';

const Stack = createStackNavigator();

function StackNavigation(props) {
  return (
    <Stack.Navigator
      initialRouteName="Support"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="Message" component={SupportMessage} />
      <Stack.Screen name="Chat" component={SupportChat} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="CreateCard" component={CreateCard} />
      <Stack.Screen name="EditCard" component={EditCard} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
