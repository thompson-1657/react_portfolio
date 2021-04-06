import React from "react"
import Pdf from "../documents/Thompson_2021.pdf"

const MyContactInfo = () =>(
    <div class="card" id="contact-me">
    <div class="card-body">
      <p class="contactMe">Email: Thompson.1657@gmail.com</p>
      <p class="contactMe">Phone: (330) 221-XXXX</p>
      <p class="contactMe">Resume: <a href={Pdf}
          target="_blank">Download
          Here</a></p>
      <p class="contactMe">GitHub: <a href="https://github.com/thompson-1657"
          target="_blank">https://github.com/thompson-1657</a></p>
      <p class="contactMe">LinkedIn: <a href="https://www.linkedin.com/in/rachel-thompson1657"
          target="_blank">https://www.linkedin.com/in/rachel-thompson1657</a></p>
    </div>
  </div>
    )


    export default MyContactInfo