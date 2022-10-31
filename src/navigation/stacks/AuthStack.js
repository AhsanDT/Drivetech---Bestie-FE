import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ShowInterest from '../../screens/Auth/ShowInterest';
import SignUp from '../../screens/Auth/SignUp/SignUp';
import ForgotPassword from '../../screens/Auth/ForgotPassword';
import CreatePassword from '../../screens/Auth/CreatePassword';
import VerifyOtp from '../../screens/Auth/VerifyOtp';
import ProfileImage from '../../screens/Auth/ProfileImage';
import UploadImage from '../../screens/Auth/UploadImage';
import TermsConditions from '../../screens/Auth/TermsConditions';
import ImageVerification from '../../screens/Auth/ImageVerification';
import PrivacyPolicy from '../../screens/Auth/PrivacyPolicy';
import CameraDetails from '../../screens/Auth/CameraDetails';
import AddPortfolio from '../../screens/Auth/Bestie/AddPortfolio';
import RegisterBestie from '../../screens/Auth/Bestie/Register';
import AccountRate from '../../screens/Auth/Bestie/AccountRate';
import Test from '../../screens/Auth/Test/Test';
import ShowTalent from '../../screens/Auth/Bestie/ShowTalent';
import Login from '../../screens/Auth/Login';
import SelectRole from '../../screens/Auth/SelectRole';
import AddSocialMediaLinks from '../../screens/Auth/Bestie/AddSocialMediaLinks';
import Walkthrough from '../../screens/Walkthrough';

const Stack = createNativeStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="CameraDetails"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ShowInterest" component={ShowInterest} />
      <Stack.Screen name="CameraDetails" component={CameraDetails} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Forgot" component={ForgotPassword} />
      <Stack.Screen name="CreatePassword" component={CreatePassword} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      <Stack.Screen name="ProfileImage" component={ProfileImage} />
      <Stack.Screen name="UploadImage" component={UploadImage} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} />
      <Stack.Screen name="ImageVerification" component={ImageVerification} />
      <Stack.Screen name="AddPortfolio" component={AddPortfolio} />
      <Stack.Screen name="RegisterBestie" component={RegisterBestie} />
      <Stack.Screen name="AccountRate" component={AccountRate} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="ShowTalent" component={ShowTalent} />
      <Stack.Screen name="SelectRole" component={SelectRole} />
      <Stack.Screen
        name="AddSocialMediaLinks"
        component={AddSocialMediaLinks}
      />
      <Stack.Screen name="Walkthrough" component={Walkthrough} />
    </Stack.Navigator>
  );
}

export default AuthStack;
