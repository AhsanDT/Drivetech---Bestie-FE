import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../../screens/Auth/Login';
import SignUp from '../../screens/Auth/SignUp/SignUp';
import ForgotPassword from '../../screens/Auth/ForgotPassword';
import CreatePassword from '../../screens/Auth/CreatePassword';
import VerifyOtp from '../../screens/Auth/VerifyOtp';
// import PrivacyPolicy from '../../screens/Auth/PrivacyPolicy';
// import TermsConditions from '../../screens/Auth/TermsConditions';

const Stack = createNativeStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="forgot" component={ForgotPassword} />
      <Stack.Screen name="CreatePassword" component={CreatePassword} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      {/* <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} /> */}
    </Stack.Navigator>
  );
}

export default AuthStack;
