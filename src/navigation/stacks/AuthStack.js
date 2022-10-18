import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../../screens/Auth/Login';
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

const Stack = createNativeStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="UploadImage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ShowInterest" component={ShowInterest} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Forgot" component={ForgotPassword} />
      <Stack.Screen name="CreatePassword" component={CreatePassword} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      <Stack.Screen name="ProfileImage" component={ProfileImage} />
      <Stack.Screen name="UploadImage" component={UploadImage} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} />
      <Stack.Screen name="ImageVerification" component={ImageVerification} />
    </Stack.Navigator>
  );
}

export default AuthStack;
