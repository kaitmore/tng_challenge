import React from 'react';
import ReactDOM from 'react-dom';
import Episode from '../components/Episode';
import FilterBar from '../components/FilterBar';
import ListEpisodes from '../components/ListEpisodes';
import App from '../components/App';
import { Provider } from 'react-redux';
import { shallow, mount, render } from 'enzyme';
import { createMockStore } from 'redux-test-utils'
import configureStore from 'redux-mock-store'
import * as action from '../store'

const testEpisodes = [
  {
    originalTitle: "ABC",
    seasonNumber: 1,
    episodeNumber: 1,
    averageRating: 6.9,
    numVotes: 3862
  },
  {
    originalTitle: "DEF",
    seasonNumber: 5,
    episodeNumber: 18,
    averageRating: 9,
    numVotes: 1820
  },
  {
    originalTitle: "GHI",
    seasonNumber: 1,
    episodeNumber: 14,
    averageRating: 7.5,
    numVotes: 1570
  }]

describe('<App>', () => {

  const initialState = { season: "all", sortBy: "title", episodes: testEpisodes }
  const mockStore = configureStore()
  let store, wrapper

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = render(<Provider store={store}><App /></Provider>)
  })

  test('+++ lists all the episodes', () => {
    expect(wrapper.find("tr.listing").length).toBe(3)
  })

})

describe('<Episode>', () => {
  test('renders correct output', () => {
    const episode = shallow(
      <Episode
        key={1}
        title="Title"
        season="8"
        episodeNumber="26"
        rating="8.9"
        votes="7886" />
    );
    episode.find('tr')
    expect(episode.text()).toEqual('Title8268.97886')
  })
})