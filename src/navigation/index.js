import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import AuthStack from './stacks/AuthStack';
import SelectRole from '../screens/Auth/SelectRole';
import {MainStack} from './bottomTabs';
import StackNavigation from './stacks/BestieStack';
import {useSelector} from 'react-redux';
import BottomTab from '../navigation/bottomTabs';

const AppStack = createNativeStackNavigator();

const MainAppNav = () => {
  const {isLoggedIn} = useSelector(state => state.auth);
  console.log('');

  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'Splash'} component={Splash} />
        <AppStack.Screen name={'SelectRole'} component={SelectRole} />
        <AppStack.Screen name={'Auth'} component={AuthStack} />
        <AppStack.Screen name="MainStack" component={MainStack} />
        <AppStack.Screen name="Bestietack" component={StackNavigation} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
