import {Link} from 'react-router-dom'
import './index.css'

const CategoryList = props => {
  const {details} = props
  const {requrl, reqid} = details

  return (
    <Link to={`/category-playlists/${reqid}`}>
      <li className="items-container">
        <img src={requrl} alt="category" className="pic" />
      </li>
    </Link>
  )
}
export default CategoryList
