import styled from "styled-components"
import { Link } from "gatsby"

import { UI } from "../../constants"

export const Container = styled.main`
  margin-bottom: ${UI.DEFAULT_MARGIN_MOBILE};
`

export const Text = styled.p`
  font-size: 1.5rem;
  line-height: 2.5rem;

  @media screen and (max-width: 440px) {
    font-size: 1.09rem;
    line-height: 1.9rem;
  }
`

export const TextLink = styled(Link)`
  font-weight: bold;
  color: #000000;
  text-decoration: none;

  &:hover {
    color: darkblue;
    text-decoration: underline;
  }
`
