export const SET_USER_DETAILS = 'SET_USER_DETAILS'
export const LOGED_IN = 'LOGED_IN'


export const setUserDetails = (payload) => {
  return {
    type: SET_USER_DETAILS,
    payload
  }
}
export const setLoggedIn = (payload) => {
  return {
    type: LOGED_IN,
    payload
  }
}