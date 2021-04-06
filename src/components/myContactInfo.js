import React from "react"
import Pdf from "../documents/Thompson_2021.pdf"
import styled from "styled-components"

const P = styled.p`
text-align: right;
  color: #99b5b9;
  font-size:18px;
`
const Div = styled.div`
  margin-left: 60%;
  background-color: white;
`
const A = styled.a`
color: #99b5b9;
font-size:18px;
`

const MyContactInfo = () =>(
    <Div class="card" id="contact-me">
    <div class="card-body">
      <P class="contactMe">Email: Thompson.1657@gmail.com</P>
      <P class="contactMe">Phone: (330) 221-XXXX</P>
      <P class="contactMe">Resume: <A href={Pdf}
          target="_blank">Download
          Here</A></P>
      <P class="contactMe"><i class="fab fa-github fa-lg"></i>:  <A href="https://github.com/thompson-1657"
          target="_blank">https://github.com/thompson-1657</A></P>
      <P class="contactMe"><i class="fab fa-linkedin fa-lg"></i>:  <A href="https://www.linkedin.com/in/rachel-thompson1657"
          target="_blank">https://www.linkedin.com/in/rachel-thompson1657</A></P>
    </div>
  </Div>
    )


    export default MyContactInfo