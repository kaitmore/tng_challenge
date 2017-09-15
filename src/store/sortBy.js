const SORT_BY = "SORT_BY"

const initialState = 'title'

// Action Creator
export const sortBy = filter => ({ type: SORT_BY, filter })

// Reducer
export default function (state = initialState, action) {
    switch (action.type) {
        case SORT_BY:
            return action.filter
        default:
            return state
    }
}