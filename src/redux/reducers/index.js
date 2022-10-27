import {combineReducers} from 'redux';
import authReducer from './auth-reducers/auth-reducer';

import * as types from '../actions/types/auth_types';
import paymentReducer from './payment-reducers/payment-reducers';

const root_reducer = combineReducers({
  /* your app’s top-level reducers */
  auth: authReducer,
  payment: paymentReducer,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === types.LOGOUT_REQUEST_SUCCESS) {
    state = undefined;
  }

  return root_reducer(state, action);
};

export default rootReducer;
