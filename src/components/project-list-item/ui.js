import styled from "styled-components"

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
  padding: 0 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 440px) {
    margin-bottom: 25px;
  }
`

export const NameContainer = styled.h4`
  flex: 1;
`

export const Name = styled.a`
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
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`

export const LogoContainer = styled.a`
  width: 40px;
  height: 40px;

  @media screen and (max-width: 440px) {
    width: 25px;
    height: 25px;
  }
`

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`
