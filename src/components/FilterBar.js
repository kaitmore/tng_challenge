import React from 'react'
import uniqBy from 'lodash/uniqBy'
import PropTypes from 'prop-types'

const FilterBar = ({ episodes, sortBy, season, handleChange }) => {
    return (
        <div className="nav">
         <h1>Star Trek: The Next Generation</h1>
            <div>
                <span className="caption">Sort By:</span>
                <div className="bg">
                <select  id="sortBy" name="sortBy" value={sortBy} onChange={handleChange}>
                    <option value="title">Title</option>
                    <option value="rating">Rating</option>
                    <option value="votes">Votes</option>
                </select>   </div>
            </div>
            <div>
                <span className="caption">Season:</span>
                <div className="bg">
                    <select id="season" name="season" value={season} onChange={handleChange}>
                    <option value="all">All</option>
                    { // find how many seasons
                        uniqBy(episodes, "seasonNumber")
                            .sort((a, b) => { 
                                return a.seasonNumber > b.seasonNumber ? 1 : -1 })
                            .map(item => {
                                return <option value={item.seasonNumber} key={item.seasonNumber}>{item.seasonNumber}</option>
                            })}
                </select>   </div>
            </div>
        </div>
    )
}
FilterBar.propTypes = {
    sortBy: PropTypes.string,
    episodes: PropTypes.array,
    season: PropTypes.string,
    handleChange: PropTypes.func
  }
export default FilterBar