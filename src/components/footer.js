import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  background-color: #99b5b9;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const PageFooter = () => (
  <Footer className="container-fluid text-light text-center p-4"></Footer>
);

export default PageFooter;
