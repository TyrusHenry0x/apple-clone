import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavLinks = () => {
  return (
    <div className="dropdown-container">
      <div className="search-bar">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mobile-nav-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg><p className="search-text">Search apple.com</p>
      </div>
      <div className="dropdown-hr-long"/>
    <ul className="nav-list">
      <li className="list-item">
        <NavLink className="mobile-nav-link" to="/">Store</NavLink>
      </li>
      <div className="dropdown-hr"/>
      <li className="list-item">
        <NavLink className="mobile-nav-link" to="/">Mac</NavLink>
      </li>
      <div className="dropdown-hr"/>
      <li className="list-item">
        <NavLink className="mobile-nav-link" to="/">iPad</NavLink>
      </li>
      <div className="dropdown-hr"/>
      <li className="list-item">
        <NavLink className="mobile-nav-link" to="/">iPhone</NavLink>
      </li>
      <div className="dropdown-hr"/>
      <li className="list-item">
        <NavLink className="mobile-nav-link" to="/">Watch</NavLink>
      </li>
      <div className="dropdown-hr"/>
      <li className="list-item">
        <NavLink className="mobile-nav-link" to="/">AirPods</NavLink>
      </li>
      <div className="dropdown-hr"/>
      <li className="list-item">
        <NavLink className="mobile-nav-link" to="/">TV & Home</NavLink>
      </li>
      <div className="dropdown-hr"/>
      <li className="list-item">
        <NavLink className="mobile-nav-link" to="/">Only on Apple</NavLink>
      </li>
      <div className="dropdown-hr"/>
      <li className="list-item">
        <NavLink className="mobile-nav-link" to="/">Accessories</NavLink>
      </li>
      <div className="dropdown-hr"/>
      <li className="list-item">
        <NavLink className="mobile-nav-link" to="/">Support</NavLink>
        </li>
        <li>
          <div className="bottom-filler"/>
        </li>
      {/* <li>
        <NavLink className="nav-search-link" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="nav-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-cart-link" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="nav-cart" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
        </NavLink>
      </li> */}
      </ul>
      </div>
  )
}

export default NavLinks;