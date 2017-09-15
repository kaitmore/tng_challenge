import React from 'react'
import PropTypes from 'prop-types'

const Episode = ({ title, season, episodeNumber, rating, votes }) => {
    return (
        <tr className ="tableRow listing">
           <td>{title}</td>
            <td>{season}</td>
            <td>{episodeNumber}</td>
            <td>{rating}</td>
            <td>{votes}</td>
        </tr>
    )
}

Episode.propTypes = {
    season: PropTypes.number.isRequired,
    episodeNumber: PropTypes.number.isRequired,
    rating: PropTypes.number,
    votes: PropTypes.number
  }

export default Episode