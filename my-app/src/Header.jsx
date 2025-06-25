import Marker from "./assets/map-marker-svgrepo-com.svg"
import './Header.css'

function Header() {
  return(
    <nav className="header">
      <img src={Marker} alt="" />
      <h1>My Travel Journal</h1>
    </nav>
  )
}

export default Header;