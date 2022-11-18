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
import EditAccountRate from '../../../screens/App/Bestie/EditAccountRate';
import EditInterest from '../../../screens/App/EditInterest';
import EditSocialMediaLink from '../../../screens/App/Bestie/EditSocialMediaLinks';
import AddBankAccount from '../../../screens/App/Bestie/AddBankAccount';
import ChangePassword from '../../../screens/App/ChangePassword';
import EditPasswordEmailConfirmation from '../../../screens/App/EditPasswordEmailConfirmmation';
import ChanePasswordVerifyOtp from '../../../screens/App/ChanePasswordVerifyOtp';
import EditBankAccount from '../../../screens/App/Bestie/EditBankAccount';
import UpdateProfilePortfolio from '../../../screens/App/Bestie/UpdateProfilePortfolio';
import UpdateProfileAccountRate from '../../../screens/App/Bestie/UpdateProfileAccountRate';
import UpdateProfileCameraDetails from '../../../screens/App/Bestie/UpdateProfileCameraDetails';
import UpdateProfileSocialMediaLinks from '../../../screens/App/Bestie/UpdateProfileSocialMediaLinks';
import UpdateProfileTalents from '../../../screens/App/Bestie//UpdateProfileTalents/UpdateProfileTalents';

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
      <Stack.Screen name="EditAccountRate" component={EditAccountRate} />
      <Stack.Screen name="EditInterest" component={EditInterest} />
      <Stack.Screen
        name="EditSocialMediaLink"
        component={EditSocialMediaLink}
      />
      <Stack.Screen name="AddBankAccount" component={AddBankAccount} />

      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen
        name="EditPasswordEmailConfirmation"
        component={EditPasswordEmailConfirmation}
      />
      <Stack.Screen
        name="ChanePasswordVerifyOtp"
        component={ChanePasswordVerifyOtp}
      />
      <Stack.Screen name="EditBankAccount" component={EditBankAccount} />

      <Stack.Screen
        name="UpdateProfilePortfolio"
        component={UpdateProfilePortfolio}
      />
      <Stack.Screen
        name="UpdateProfileAccountRate"
        component={UpdateProfileAccountRate}
      />
      <Stack.Screen
        name="UpdateProfileCameraDetails"
        component={UpdateProfileCameraDetails}
      />
      <Stack.Screen
        name="UpdateProfileSocialMediaLinks"
        component={UpdateProfileSocialMediaLinks}
      />
      <Stack.Screen
        name="UpdateProfileTalents"
        component={UpdateProfileTalents}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
