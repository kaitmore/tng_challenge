import axios from 'axios'
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

// Thunk
export const getEpisodes = () => dispatch => {
    axios.get('http://ec2-52-90-200-167.compute-1.amazonaws.com:8080')
        .then(res => dispatch(getEpisodesSuccess(res.data)))
        .catch(err => { dispatch(error(err)) })
}