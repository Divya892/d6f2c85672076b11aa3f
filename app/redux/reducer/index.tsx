import { combineReducers } from 'redux';
import user from './user';

const appReducer = combineReducers({
//   RootStackReducer,
  user
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;