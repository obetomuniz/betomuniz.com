import React from "react"

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
            height="40"
            width="40"
          />
        ) : (
          <Logo as="svg">
            <use href="#github-2" />
          </Logo>
        )}
      </LogoContainer>
    </Container>
  )
}

export default ProjectListItem
