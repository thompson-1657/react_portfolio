import React from "react";
import ProfilePicture from "./profilePicture";
import styled from "styled-components";
import "./component-styles.css";

const Div = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
  margin-left: 70px;
  margin-right: 70px;
`;
const H2 = styled.h2`
  color: #99b5b9;
  margin-top: 20px;
`;
const P = styled.p`
  font-size: 21px;
`;

const AboutMe = () => (
  <Div className="card">
    <div className="container">
      <header className="card-title">
        <H2>About Me</H2>
      </header>
      <div className="row">
        <ProfilePicture />
        <div className="col-md-8">
          <P>
            {" "}
            My name is Rachel Thompson. I am originally from Ohio, but have been
            a resident of Chicago for the past nine years. I am a former server
            and hospitality professional who recently made a career change into
            web development. I am a highly motivated and creative coder who has
            a passion for leveraging my artistic and hospitality background to
            come up with unique and beautiful applications.{" "}
          </P>
          <P>
            Having recently recieved a certificate in Full Stack Web Development
            from Northwestern University I am currently seeking a new and
            exciting career in web development.
          </P>
          <p className="skills">
            <h6 className="languages">Languages and Technologies:</h6>
            HTML<br></br>CSS<br></br>JavaScript<br></br>JQuery<br></br>API's
            <br></br>MySQL<br></br>Node.js<br></br>Express.js<br></br>MongoDB
            <br></br>Mongoose<br></br>React<br></br>
            <br></br>
            <i className="fab fa-html5 fa-lg"></i>&nbsp;&nbsp;
            <i className="fab fa-css3-alt fa-lg"></i>&nbsp;&nbsp;
            <i className="fab fa-js-square fa-lg"></i>&nbsp;&nbsp;
            <i className="fab fa-node fa-lg"></i>&nbsp;&nbsp;
            <i className="fab fa-react fa-lg"></i>&nbsp;&nbsp;
            <i className="fab fa-npm fa-lg"></i>
          </p>
        </div>
      </div>
    </div>
  </Div>
);

export default AboutMe;
