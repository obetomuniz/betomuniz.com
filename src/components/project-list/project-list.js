import React from "react"

import { ProjectListItem } from "../"
import { Container } from "./ui"

const ProjectList = ({ data }) => {
  return (
    <Container>
      {data.map(({ node: { name, url, image } }, index) => {
        return (
          <ProjectListItem
            key={`project-${index}`}
            name={name}
            url={url}
            image={image}
          />
        )
      })}
    </Container>
  )
}

export default ProjectList
