import axios from 'axios'
import { error } from './error'

const GET_EPISODES_SUCCESS = "GET_EPISODES_SUCCESS"

const initialState = []

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded, application/json'
axios.defaults.headers.common.crossDomain = true 
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '' 
axios.defaults.headers.common['Accept'] = 'application/json, text/plain'

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