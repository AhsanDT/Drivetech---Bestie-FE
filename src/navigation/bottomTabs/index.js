import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTab} from '../../components';
import HomeStack from '../stacks/BestieStack/HomeStack';
import JobStack from '../stacks/BestieStack/JobStack';
import CalendarStack from '../stacks/BestieStack/CalendarStack';
import ChatStack from '../stacks/BestieStack/ChatStack';
import MapStack from '../stacks/EndUserStack/MapStack';

const Tab = createBottomTabNavigator();
const [userType, setUserType] = useState('Bestie');
const MainStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen component={HomeStack} name={'Home'} />
      <Tab.Screen
        component={userType ? JobStack : MapStack}
        name={userType ? 'Jobs' : 'Map'}
      />
      <Tab.Screen component={CalendarStack} name={'Calendar'} />
      <Tab.Screen component={ChatStack} name={'Chat'} />
    </Tab.Navigator>
  );
};

export {MainStack};
