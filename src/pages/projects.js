import React from "react"

import { Layout, SEO } from "../components"

import projects from "../content/projects.json"

const ProjectListItemManual = ({ name, url, image }) => {
  return (
    <li>
      <h4>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h4>
      <div>
        <img src={image} alt={`${name} Logo`} />
      </div>
    </li>
  )
}

const ProjectListItemGithub = ({ name, url }) => {
  return (
    <li>
      <h4>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h4>
      <div>
        <svg>
          <use href="#github" />
        </svg>
      </div>
    </li>
  )
}

const ProjectList = ({ data }) => {
  return (
    <ul>
      {data.map(({ manual, name, url, image }, index) => {
        if (manual) {
          return (
            <ProjectListItemManual
              key={`project-${index}`}
              name={name}
              url={url}
              image={image}
            />
          )
        }

        return (
          <ProjectListItemGithub
            key={`project-${index}`}
            name={name}
            url={url}
          />
        )
      })}
    </ul>
  )
}

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO
        title="Projects"
        description="Beto Muniz as a community contributor."
        keywords="beto, muniz, open source, projects, beto muniz, betomuniz"
      />

      <section>
        <ProjectList data={projects} />
      </section>
    </Layout>
  )
}

export default ProjectsPage
