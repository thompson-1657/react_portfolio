import React from "react"
import styled from "styled-components"

const Input = styled.input`
  width: 85%
`
const Textarea = styled.textarea`
  width: 85%
`
const Div = styled.div`
  
  height:400px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  flex: none;
  flex-wrap: inherit;
`
const H2 = styled.h2`
  color: #99b5b9;
`
const H5 = styled.h5`
margin-top:10px;
margin-bottom:2px;
`
const Button = styled.button`
  background-color: #99b5b9;
  color: white;
  border-radius: 6px;
  border-color: white;
  box-shadow: -2px 5px 5px grey;
  padding: 8px;
  font-weight: bold;
`

const ContactForm = () =>(
  <Div className="card">
        <div className="container">
        <header class="card-title">
     <H2>Contact</H2>
   </header>
          <form className="form">
        <div>
        <H5>Name</H5>
          <Input
            name="name"
            type="text"
            placeholder="Name"
          />
          </div>
          <div>
          <H5>Email</H5>
          <Input
            name="email"
            type="text"
            placeholder="Email"
          />
           </div>
           <div>
           <H5>Message</H5>
          <Textarea
            name="message"
            type="text"
            placeholder="Message"
          />
           </div>
           <div>
          <Button>Submit</Button>
          </div>
        </form>
        </div>
    </Div>
 )


export default ContactForm