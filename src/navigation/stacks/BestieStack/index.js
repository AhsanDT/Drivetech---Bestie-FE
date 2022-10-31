import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SupportMessage from '../../../screens/App/SupportMessage';
import SupportChat from '../../../screens/App/SupportChat';
import EditCard from '../../../screens/App/EditCard';
import Setting from '../../../screens/App/Setting';
import SelectPaymentMethod from '../../../screens/App/SelectPaymentMethod';
import GetPaymentList from '../../../screens/App/GetPaymentList';
import AddCard from '../../../screens/App/AddCard';
import SupportList from '../../../screens/App/SupportList';
import PrivacyPolicy from '../../../screens/Auth/PrivacyPolicy';
import TermsConditions from '../../../screens/Auth/TermsConditions';

const Stack = createStackNavigator();

function StackNavigation(props) {
  return (
    <Stack.Navigator
      initialRouteName="SupportList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SupportList" component={SupportList} />
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
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
