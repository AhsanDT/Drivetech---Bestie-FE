import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../../screens/Auth/Login';
import Opportunities from '../../../screens/App/Bestie/Opportunities';
import MySchedule from '../../../screens/App/Bestie/My Schedule';
import Dummy from '../../../screens/App/Bestie/Dummy';

const Stack = createStackNavigator();

function CalendarStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Dummy"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={Dummy} name={'Dummy'} />
    </Stack.Navigator>
  );
}

export default CalendarStack;
