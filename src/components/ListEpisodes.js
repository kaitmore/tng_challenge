import React from 'react';
import Episode from './Episode'
import PropTypes from 'prop-types'

const ListEpisodes = ({ visibleEpisodes }) => {
    return (
        <div className="content">
            <div className="listView">
                <table>
                    <tbody>
                        <tr className="tableHeader">
                            <th>Title</th>
                            <th>Season</th>
                            <th>Episode</th>
                            <th>Rating</th>
                            <th>Votes</th>
                        </tr>

                        {visibleEpisodes.map((item, i) => {
                            return <Episode
                                key={i}
                                title={item.originalTitle}
                                season={item.seasonNumber}
                                episodeNumber={item.episodeNumber}
                                rating={item.averageRating}
                                votes={item.numVotes} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


ListEpisodes.propTypes = {
    visibleEpisodes: PropTypes.array.isRequired
  }

export default ListEpisodes