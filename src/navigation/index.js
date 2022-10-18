import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../screens/Splash';
import AuthStack from './stacks/AuthStack';

const AppStack = createNativeStackNavigator();

const MainAppNav = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'Splash'} component={Splash} />
        <AppStack.Screen name={'Auth'} component={AuthStack} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
