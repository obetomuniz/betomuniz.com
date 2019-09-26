import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <Link to="/">
      <img
        alt="Beto Muniz"
        src="https://www.gravatar.com/avatar/fff7258836f20ea66b061b49a51fe8dd?s=170"
      />
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <Link to="/projects/">Projects</Link>
        </li>
        <li>
          <Link to="/talks/">Talks</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
