import { SET_SELECTED_VALUE } from 'Actions/homeActions'

const ACTION_HANDLERS = {
  [SET_SELECTED_VALUE]: (state, action) => ({
    ...state, selectedValues: action.payload
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}

export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
