import React from 'react'
import Profile from '../images/profilepic.jpeg'
import styled from "styled-components"

const Img = styled.img`
    margin-bottom: 30px;
`


const ProfilePicture = () => (
 <div className="col-md-4 text-center">
 <Img src={Profile} alt="Profile" className="img-fluid"></Img>
</div>
)

export default ProfilePicture