const ERROR = "ERROR"

const initialState = ''

// Action Creators
export const error = error => ({type: ERROR, error })

// Reducer
export default function (state = initialState, action) {
    switch (action.type) {
      case ERROR:
        return action.error
      default:
        return state
    }
  }