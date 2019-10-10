import styled from "styled-components"

export const Container = styled.li`
  display: block;
  margin: 40px 0;

  @media screen and (max-width: 440px) {
    margin: 25px 0;
  }
`

export const PostLink = styled.a`
  text-decoration: none;
  display: inline-block;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: #222222;
  font-weight: bold;

  &:hover {
    color: #777777;
    text-decoration: underline;
  }

  @media screen and (max-width: 440px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`
