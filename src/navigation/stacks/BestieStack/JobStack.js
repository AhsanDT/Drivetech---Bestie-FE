import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UploadImage from '../../../screens/Auth/UploadImage';

const Stack = createStackNavigator();

function JobStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="UploadImage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="UploadImage" component={UploadImage} />
    </Stack.Navigator>
  );
}

export default JobStack;
