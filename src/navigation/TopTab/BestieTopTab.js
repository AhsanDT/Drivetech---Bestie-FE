import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopTabs} from '../../components';
import Opportunities from '../../screens/App/Bestie/Opportunities';
import MySchedule from '../../screens/App/Bestie/My Schedule';

const Tab = createMaterialTopTabNavigator();

const BestieTopTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Opportunities"
      screenOptions={{headerShown: false}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBar={props => <TopTabs {...props} />}
      tabBarIndicator={true}>
      <Tab.Screen component={Opportunities} name={'Opportunities'} />
      <Tab.Screen component={MySchedule} name={'My Schedule'} />
    </Tab.Navigator>
  );
};

export {BestieTopTab};
