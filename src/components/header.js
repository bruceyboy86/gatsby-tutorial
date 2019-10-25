import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header>
    <div className="headerWrapper">
      <Link id="logo" to="/">
        <Logo />
      </Link>
      <label id="hamburgerLabel" for="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger"/>
      <nav id="pageNav">
        <ul>
          <li>
            <Link to="/explore">
              Explore
            </Link>
          </li>
          <li>
            <Link to="/illuminate-live-holding">
              Live
            </Link>
          </li>
          <li>
            <Link to="/illuminate-learn">
              Learn
            </Link>
          </li>
          <li >
            <Link to="/technical-studio">
              Technical
            </Link>
          </li>
          <li >
            <Link>
              <span>Search</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
