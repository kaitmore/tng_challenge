const SET_SEASON = "SET_SEASON"

const initialState = 'all'

// Action Creator
export const setSeason = season => ({type: SET_SEASON, season })

// Reducer
export default function (state = initialState, action) {
    switch (action.type) {
      case SET_SEASON:
        return action.season
      default:
        return state
    }
  }