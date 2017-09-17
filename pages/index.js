import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <div>
    <h1>Christmas top 100</h1>
    <ul>
      {props.songs.map(function (song) {
        return (
          <li key={song.id}>
            {song.title} - {song.artist}
          </li>
        )
      })}
    </ul>
  </div>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://back.christmastop100.nl/api/songs')
  const data = await res.json()

  return {
    songs: data
  }
}

export default Index
