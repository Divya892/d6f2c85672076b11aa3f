/**
 * @UserSaga will listen for the requests of user related stuffs, call a api using apiService and return back to corresponding reducer
 */

import {
  call, put
} from 'redux-saga/effects';
import * as API_SERVICE from '../../services/apiService';
import * as CONST from '../../utils/Constants';
import { FetchSuccess } from '../actions/userActions';

// Define Worker Sagas

export function* fetchUserDetails(action) {
  let path = '';
  let token = '';
  try {
    const res = yield call(API_SERVICE.secureGet, path, token);
    console.log('@@@ res =======', res);
    if (res !== undefined) {
      yield put(FetchSuccess(res));
    } else {
    }
  } catch (e) {
    console.log('@@@ error ========', e);
  }
}