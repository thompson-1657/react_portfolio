import React from "react";
import Pdf from "../documents/thompson.2021.pdf";
import styled from "styled-components";

const P = styled.p`
  text-align: center;
  color: #99b5b9;
  font-size: 20px;
  margin-top: 5rem;
`;

const H2 = styled.h2`
  text-align: center;
  color: #99b5b9;
  font-size: 40px;
`;

const Div = styled.div`
  background-color: white;
  width: 55vw;
  margin: 3rem auto;
  border: 6px solid #99b5b9;
  border-radius: 5px;
  position: relative;
  min-height: 100vh;

  @media (max-width: 954px) {
    width: 80vw;
  }
`;

const A = styled.a`
  color: #99b5b9;
  font-size: 18px;
`;

const MyContactInfo = () => (
  <Div className="card" id="contact-me">
    <div className="card-body">
      <H2 className="contactMe">Contact Me</H2>
      <P className="contactMe">Email: Thompson.1657@gmail.com</P>
      <P className="contactMe">
        Resume:{" "}
        <A href={Pdf} target="_blank">
          Download Here
        </A>
      </P>
      <P className="contactMe">
        <i className="fab fa-github fa-lg"></i>:{" "}
        <A href="https://github.com/thompson-1657" target="_blank">
          https://github.com/thompson-1657
        </A>
      </P>
      <P className="contactMe">
        <i className="fab fa-linkedin fa-lg"></i>:{" "}
        <A
          href="https://www.linkedin.com/in/rachel-thompson1657"
          target="_blank"
        >
          https://www.linkedin.com/in/rachel-thompson1657
        </A>
      </P>
    </div>
  </Div>
);

export default MyContactInfo;
