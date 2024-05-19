// import {  format } from "date-fns";
import './index.css'

const FeaturedItems = props => {
  const {details, onClicked} = props
  const {time, song, added, album, name, artist} = details
  // console.log(details)
  // const newadded = console.log(newadded)
  const min = Math.round(time / 60000)
  const sec = Math.round((time % 60000) / 1000)

  // console.log(somedate)np
  const clikedToPlay = () => {
    onClicked(song)
  }

  return (
    <button className="buttonf" type="button" onClick={clikedToPlay}>
      <li className="items">
        <p className="p">{name}</p>
        <p className="p">{album}</p>
        <p className="p">
          {min}:{sec}
        </p>
        <p className="p">{artist}</p>
        <p className="p">{added}</p>
      </li>
    </button>
  )
}
export default FeaturedItems
