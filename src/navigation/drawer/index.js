import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import FighterTabs from '../tabs/FighterTabs';
import EventStack from '../stacks/Fighter/EventStack';
import DrawerHeader from '../drawer/DrawerHeader';
import About from '../../screens/App/AppScreens/About';
import SupportStack from '../stacks/Fighter/SupportStack';
import FAQ from '../../screens/App/AppScreens/FAQ';
import FriendRequests from '../../screens/App/AppScreens/FriendRequests';
import Preferences from '../../screens/App/AppScreens/Preferences';
import TermsofUse from '../../screens/Auth/Fighter/TermsofUse';
import PrivacyPolicy from '../../screens/Auth/Fighter/PrivacyPolicy';
import SettingsStack from '../stacks/Fighter/SettingsStack';

const DrawerNav = ({route}) => {
  return (
    <Drawer.Navigator
      initialRouteName="Fighter"
      screenOptions={{
        drawerType: 'front',
        drawerStyle: {width: '65%'},
      }}
      drawerContent={props => <DrawerHeader {...props} />}>
      <Drawer.Screen
        name="Fighter"
        component={FighterTabs}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Events"
        component={EventStack}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="FriendRequests"
        component={FriendRequests}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="SupportStack"
        component={SupportStack}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={'FAQ'}
        component={FAQ}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={'Preferences'}
        component={Preferences}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={'TermsofUse'}
        component={TermsofUse}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={'PrivacyPolicy'}
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={'SettingsStack'}
        component={SettingsStack}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
