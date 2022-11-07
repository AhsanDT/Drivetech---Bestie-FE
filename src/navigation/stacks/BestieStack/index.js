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
import EditProfileMenu from '../../../screens/App/EditProfileMenu';
import EditPersonalInformation from '../../../screens/App/EditPersonalInformation';
import EditPortfolio from '../../../screens/App/Bestie/EditPortfolio';
import EditCameraDetails from '../../../screens/App/Bestie/EditCameraDetails';
import EditTalents from '../../../screens/App/Bestie/EditTalents';

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
      <Stack.Screen name="EditProfileMenu" component={EditProfileMenu} />
      <Stack.Screen
        name="EditPersonalInformation"
        component={EditPersonalInformation}
      />
      <Stack.Screen name="EditPortfolio" component={EditPortfolio} />
      <Stack.Screen name="EditCameraDetails" component={EditCameraDetails} />
      <Stack.Screen name="EditTalents" component={EditTalents} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
