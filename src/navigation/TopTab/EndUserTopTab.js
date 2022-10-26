import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopTabs} from '../../components';
import Opportunities from '../../screens/App/Bestie/Opportunities';
import MySchedule from '../../screens/App/Bestie/My Schedule';
import Besties from '../../screens/App/EndUser/Besties';

const Tab = createMaterialTopTabNavigator();

const EndUserTopTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBar={props => <TopTabs {...props} />}
      tabBarIndicator={true}>
      <Tab.Screen component={Besties} name={'Besties'} />
      <Tab.Screen component={Opportunities} name={'Opportunities'} />
    </Tab.Navigator>
  );
};

export {EndUserTopTab};
