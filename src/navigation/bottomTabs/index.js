import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTab} from '../../components';
import HomeStack from '../stacks/BestieStack/HomeStack';
import JobStack from '../stacks/BestieStack/JobStack';
import CalendarStack from '../stacks/BestieStack/CalendarStack';
import ChatStack from '../stacks/BestieStack/ChatStack';
import MapStack from '../stacks/EndUserStack/MapStack';
import {useSelector} from 'react-redux';
import EndUserHomeStack from '../stacks/EndUserStack/EndUserHomeStack';

const Tab = createBottomTabNavigator();

const MainStack = () => {
  const {signupObject} = useSelector(state => state.auth);
  const {profileType} = signupObject;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen
        component={profileType == 'user' ? EndUserHomeStack : HomeStack}
        name={'Home'}
      />
      <Tab.Screen component={JobStack} name={'Jobs'} />
      <Tab.Screen component={CalendarStack} name={'Calendar'} />
      <Tab.Screen component={ChatStack} name={'Chat'} />
    </Tab.Navigator>
  );
};

export {MainStack};
