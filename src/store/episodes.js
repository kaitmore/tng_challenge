import { error } from './error'

const GET_EPISODES_SUCCESS = "GET_EPISODES_SUCCESS"

const initialState = []

// Action Creator
const getEpisodesSuccess = episodes => ({ type: GET_EPISODES_SUCCESS, episodes })

// Reducer
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EPISODES_SUCCESS:
            return action.episodes;
        default:
            return state
    }
}
               
export const getEpisodes = () => dispatch => {
    fetch('http://ec2-52-90-200-167.compute-1.amazonaws.com:8080')
        .then(res => res.json())
        .then(res => dispatch(getEpisodesSuccess(res)))
}