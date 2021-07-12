import React, { Component } from "react";
import ProjectData from "../projectData";
import ProjectCard from "../components/projectCard";
import { Container, Row, Col } from "react-bootstrap";

class Portfolio extends Component {
  state = {
    ProjectData,
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            {this.state.ProjectData.map((project) => (
              <ProjectCard
                name={project.name}
                image={project.image}
                github={project.github}
                deployedSite={project.deployedSite}
              />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Portfolio;
