import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import JobStack from '../BestieMain/JobStack';
import CalendarStack from '../BestieMain/CalendarStack';
import ChatStack from '../BestieMain/ChatStack';
import {BottomTab} from '../../components';
import {TopTab} from '../TopTab/TopTab';
import HomeStack from '../BestieMain/HomeStack';

const Tab = createBottomTabNavigator();

const MainFlow = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen component={HomeStack} name={'Home'} />
      <Tab.Screen component={JobStack} name={'Jobs'} />
      <Tab.Screen component={CalendarStack} name={'Calendar'} />
      <Tab.Screen component={ChatStack} name={'Chat'} />
    </Tab.Navigator>
  );
};

export {MainFlow};
