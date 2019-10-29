import { SET_USER_DETAILS, LOGGED_IN } from 'Actions/loginActions'

const ACTION_HANDLERS = {
  [SET_USER_DETAILS]: (state, action) => ({
    ...state, userCredential: action.payload
  }),
  [LOGGED_IN]: (state, action) => ({
    ...state, loggedIn: action.payload
  })

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}

export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
