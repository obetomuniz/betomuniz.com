import React from "react"

import GitHubLogoIcon from "../../assets/vectors/icon-github.svg"

import { Container, NameContainer, Name, LogoContainer, Logo } from "./ui"

const ProjectListItem = ({ name, url, image }) => {
  return (
    <Container>
      <NameContainer>
        <Name href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </Name>
      </NameContainer>
      <LogoContainer>
        {image ? (
          <Logo
            loading="lazy"
            as="img"
            src={image}
            alt={`${name} Logo`}
            height="40px"
            width="40px"
          />
        ) : (
          <GitHubLogoIcon />
        )}
      </LogoContainer>
    </Container>
  )
}

export default ProjectListItem
