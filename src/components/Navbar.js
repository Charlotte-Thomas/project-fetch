import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <div className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">🐶 Fetch 🐶</Link>
      </div>
      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <div className="navbar-item">
            <Link className="navbar-item" to="/dogs">Browse Dogs</Link>
          </div>
          <div className="navbar-item">
            <Link className="navbar-item" to="/dogs/favourites">Favourites</Link>
          </div>
          {/* <div className="navbar-item">
            <Link className="navbar-item" to="/adopt">Adopt A Dog</Link>
          </div> */}
        </div>
      </div>
    </div>
  </div>
)

export default Navbar