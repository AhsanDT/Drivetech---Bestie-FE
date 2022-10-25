import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopTabs} from '../../components';
import Opportunities from '../../screens/Bestie/Opportunities';
import MySchedule from '../../screens/Bestie/My Schedule';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBar={props => <TopTabs {...props} />}
      tabBarIndicator={true}>
      <Tab.Screen component={Opportunities} name={'Opportunities'} />
      <Tab.Screen component={MySchedule} name={'My Schedule'} />
    </Tab.Navigator>
  );
};

export {TopTab};
