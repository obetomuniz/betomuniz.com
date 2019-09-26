import React from "react"

import Icon from "../../static/images/icons.svg"

const Footer = () => (
  <>
    <Icon />
    <footer>
      <ul>
        <li>
          <a
            title="Beto Muniz Linkedin"
            href="https://www.linkedin.com/in/obetomuniz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg>
              <use xlinkHref="#linkedin"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            title="Beto Muniz GitHub"
            href="https://github.com/obetomuniz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg>
              <use xlinkHref="#github"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            title="Beto Muniz Twitter"
            href="https://twitter.com/obetomuniz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg>
              <use xlinkHref="#twitter"></use>
            </svg>
          </a>
        </li>
        <li>
          <a title="Beto Muniz RSS" href="https://betomuniz.com/blog/feed.xml">
            <svg>
              <use xlinkHref="#rss"></use>
            </svg>
          </a>
        </li>
        <li>
          <a title="Beto Muniz Email" href="mailto:contato@betomuniz.com">
            <svg>
              <use xlinkHref="#mail"></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  </>
)

export default Footer
