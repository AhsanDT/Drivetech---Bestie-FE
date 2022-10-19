import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, LogBox} from 'react-native';
import MainNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import store, {persistor} from './src/redux/store';
import {colors, stripe_publishableKey} from './src/shared/exporter';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Settings} from 'react-native-fbsdk-next';

// Ignore Warnings
LogBox.ignoreAllLogs();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  useEffect(() => {
    Settings.initializeSDK();
    Settings.setAppID('639427440890710');
    GoogleSignin.configure({
      webClientId:
        '253853545750-1ho34hm78c7gmlv9mfkul2q7bopdopuq.apps.googleusercontent.com',
    });
  }, []);

  return (
    <Provider store={store}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />
      {/* <StripeProvider publishableKey={stripe_publishableKey}> */}
      <PersistGate persistor={persistor}>
        <MainNavigation />
      </PersistGate>
      {/* </StripeProvider> */}
    </Provider>
  );
};

export default App;
