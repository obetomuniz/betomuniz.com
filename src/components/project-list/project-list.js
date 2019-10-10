import React from "react"

import { ProjectListItem } from "../"

const ProjectList = ({ data }) => {
  return (
    <ul>
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
    </ul>
  )
}

export default ProjectList
