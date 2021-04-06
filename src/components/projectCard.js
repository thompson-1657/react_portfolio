import React from "react";
import styled from "styled-components"

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 65%;
  border-style: solid;
  color: #99b5b9;
  border-width: 5px;
 `
const Div = styled.div`
  height:450px;
  width:850px;
  background-color:white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  flex: none;
  flex-wrap: inherit;
  margin-bottom:35px;
  margin-top:35px;
  box-shadow: -5px 10px 10px grey;
  border-style: solid;
  color: #99b5b9;
  border-width: 9px;
  overflow-y: auto;
  @media (min-width: 1145px ) {
    width:40%;
  }
`
const A = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #99b5b9;
  padding:0;
  margin-top:9px;
`
const H3 = styled.h3`
  color: #99b5b9;
  text-align: center;
`


const ProjectCard = (props) => {
  
  return(
  
<Div class="card text-center">
 <div class="card-body">
    <strong><H3 class="card-title">{props.name}</H3></strong>
  <div className="col-sm">
      <Img src={props.image} alt={props.name} />
      <A href={props.deployedSite} onClick={props.deployedSite} class="btn btn-primary">Link to Deployed site</A>
    </div>
    <div>
      <A href={props.github}  onClick={props.github} class="btn btn-primary">Github Repository</A>
    </div>
  </div>
</Div>
 )
}

        export default ProjectCard;