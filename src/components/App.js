import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as action from '../store'
import PropTypes from 'prop-types'

import ListEpisodes from './ListEpisodes'
import FilterBar from './FilterBar'

class App extends Component {
  componentDidMount() {
    this.props.getEpisodes()
  }
  handleChange = (e) => {
    e.target.name === "sortBy" ? this.props.setSort(e.target.value) : this.props.setSeason(e.target.value)
  }
  render() {
    return (
      <div className="wrapper">
        <FilterBar episodes={this.props.episodes} sortBy={this.props.sortBy} season={this.props.season} handleChange={this.handleChange} />
        {this.props.error ? <h1>{this.props.error.message}</h1> : <ListEpisodes visibleEpisodes={this.props.visibleEpisodes} />}
      </div>
    )
  }
}

const visibleEpisodes = (eps, season, sortBy) => {
  // filter by seasonNumber
  eps = season !== "all" ? eps.filter(item => item.seasonNumber === +season) : eps
  // then apply any sorting
  switch (sortBy) {
    case 'title': return eps.sort((a, b) => a.originalTitle >= b.originalTitle ? 1 : -1)
    case 'rating': return eps.sort((a, b) => a.averageRating <= b.averageRating ? 1 : -1)
    case 'votes': return eps.sort((a, b) => a.numVotes <= b.numVotes ? 1 : -1)
    default: return eps
  }
}

const mapStateToProps = state => {
  return {
    visibleEpisodes: visibleEpisodes(state.episodes, state.season, state.sortBy),
    episodes: state.episodes,
    sortBy: state.sortBy,
    season: state.season,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getEpisodes: () => dispatch(action.getEpisodes()),
    setSeason: num => dispatch(action.setSeason(num)),
    setSort: filter => dispatch(action.sortBy(filter)),
  }
}

App.propTypes = {
  visibleEpisodes: PropTypes.array.isRequired,
  episodes: PropTypes.array.isRequired,
  sortBy: PropTypes.string,
  season: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
