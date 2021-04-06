import React from 'react'
import ProfilePicture from './profilePicture'
// import styled from "styled-components"


const AboutMe = () => (
 
   

      <div className="container">
        <div className="row">
         <ProfilePicture />
          <div className="col-md-8">
            <p> My name is Rachel Thompson. I am from Kent, Ohio, which is a small town in Northeastern Ohio. In my high
              school years I loved playing field hockey. I also know how to play the flute and was a member of my high
              school band for years. After high school I attended The Ohio State University. At OSU I majored in
              psychology with
              an emphasis in gender and sexuality studies, as well as a minor in sociology.</p>
            <p>In 2012, I moved to Chicago where I have since worked at various fine dining japanese restaurants in
              the city. Most recently I have worked at Momotaro, where I have been a for four years. I am also a
              Certified Sake Professional and love to dive into the world of sake with others! In my spare time I am a
              metalsmith and enjoy soldering unique, handmade pieces of jewelry. I mostly work with brass and
              semi-precious stones, but am always up for incorporating new materials into my pieces.</p>
          </div>
        </div>

        <div className="row pt-3">
          <div className="col-md-12">
            <p>Currently, I am enrolled in a Full Stack Web Development Bootcamp through Northwestern University. I find
              both the front and back end fascinating and am looking forward to learning how to more creatively
              incorporate them both into my future applications!</p>
          </div>
        </div>
      </div>
  

)

export default AboutMe