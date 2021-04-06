import React from "react";
import styled from "styled-components"

// import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
  
  return(
    <>
    
  
  <div className="card-body">
      <div id="leftDivs">
      <h4>{props.name}</h4>
        <div className="col-sm-6">
            <img src={props.image} alt={props.name} />
         </div>
         <p className="portfolio-links">
          <a  href={props.deployedSite} onClick={props.deployedSite} id="portfolioImg" target="_blank">Link to deployed
            site</a>
        </p>
        <p className="portfolio-links">
          <a onClick={props.github} href={props.github} id="portfolioImg" target="_blank">Link to GitHub
            Repository</a>
        </p>
        </div>
    </div>
    </>
        
  
   )
  }

        export default ProjectCard;