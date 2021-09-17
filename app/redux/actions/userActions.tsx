import { FETCH_USER_SUCCESS, FETCH_USER_REQUESTED } from "../../utils/Constants";


export function onLoginUser(params): Action {
  return {
    type: FETCH_USER_REQUESTED,
    payload: params
  }
}

export function FetchUser(params): Action {
  return {
    type: FETCH_USER_REQUESTED,
    payload: params
  }
}

export function FetchSuccess(json):Action {
    return {
      type: FETCH_USER_SUCCESS,
      payload: json
    };
  }