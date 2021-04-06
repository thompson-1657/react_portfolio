import React, {Component} from 'react'
import ProjectData from "../projectData"
import ProjectCard from "../components/projectCard"



class Portfolio extends Component {

  state = {
    ProjectData
  }

  render() {
    return(
      <>
      <header class="card-title">
        <h2>Portfolio</h2>
      </header>
      {this.state.ProjectData.map(project => (
        <ProjectCard
        name={project.name}
        image={project.image}
        github={project.github}
        deployedSite={project.deployedSite}
        />
      
      ))}
        </>
    )
  }
}

export default Portfolio