import NetInfo from '@react-native-community/netinfo';
import {createContext, useContext, useEffect} from 'react';
import {appIcons} from '../exporter';

export const checkConnected = () => {
  return NetInfo.fetch().then(state => {
    return state.isConnected;
  });
};

const OnlineStatusContext = createContext(true);
export const OnlineStatusProvider = ({children}) => {
  const [isOffline, setOfflineStatus] = useState(false);

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
    return () => removeNetInfoSubscription();
  }, []);
  return (
    <OnlineStatusContext.Provider value={isOffline}>
      {children}
    </OnlineStatusContext.Provider>
  );
};

export const useOnlineStatus = () => {
  const store = useContext(OnlineStatusContext);
  return store;
};

export const responseValidator = (response, errorMsg) => {
  let errorCode = response;
  if (errorCode == 401) {
    if (errorMsg) {
      const msg = errorMsg?.message;
      return msg;
    } else {
      return 'Something went wrong!';
    }
  } else if (errorCode == 400) {
    if (errorMsg) {
      const msg = errorMsg?.message;
      return msg;
    } else {
      return 'Something went wrong!';
    }
  } else if (errorCode == 404) {
    if (errorMsg) {
      const msg = errorMsg?.message;
      return msg;
    } else {
      return 'Something went wrong!';
    }
  } else if (errorCode == 422) {
    if (errorMsg) {
      const msg = errorMsg?.message;
      return msg;
    } else {
      return 'Something went wrong!';
    }
  } else if (errorCode == 500) {
    if (errorMsg) {
      const msg = errorMsg?.message;
      return msg;
    } else {
      return 'Internal Server Error Please Try Again!';
    }
  } else {
    return 'Something went wrong!';
  }
};

export const checkBrand = name => {
  if (name == 'Visa') {
    return appIcons.visa;
  } else if (name == 'MasterCard') {
    return appIcons.masterCard;
  }
};
