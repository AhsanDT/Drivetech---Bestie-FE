import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../screens/Splash';
// import AuthStack from './stacks/AuthStack';
// import Walkthrough from '../screens/Walkthrough';
import AuthStack from '../navigation/stacks/AuthStack';
// import DrawerTabs from '../navigation/drawer';

const AppStack = createNativeStackNavigator();

const MainAppNav = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'Splash'} component={Splash} />

        <AppStack.Screen name={'Auth'} component={AuthStack} />

        {/* <AppStack.Screen name={'Walkthrough'} component={Walkthrough} />
        <AppStack.Screen name={'Auth'} component={AuthStack} /> */}
        {/* <AppStack.Screen name={'App'} component={DrawerTabs} /> */}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
