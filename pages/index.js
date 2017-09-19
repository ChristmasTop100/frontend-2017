import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'

class Index extends Component {
  static async getInitialProps() {
    const res = await fetch('https://back.christmastop100.nl/api/songs')
    const songs = await res.json()

    return { songs }
  }

  render() {
    const { songs } = this.props

    return (
      <div>
        <h1>Christmas top 100</h1>
        <ul>
          {songs.map(song => (
            <li key={song.id}>
              {song.title} - {song.artist}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

Index.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    artist: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
}

export default Index
