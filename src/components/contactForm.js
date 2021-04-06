import React from "react"

const ContactForm = () =>(

    <div className="card">
        <div className="conatiner">
        <header class="card-title">
     <h2>Contact</h2>
   </header>
          <form className="form">
        <div>
        <h5>Name</h5>
          <input
            name="name"
            type="text"
            placeholder="Name"
          />
          </div>
          <div>
          <h5>Email</h5>
          <input
            name="email"
            type="text"
            placeholder="Email"
          />
           </div>
           <div>
           <h5>Message</h5>
          <textarea
            name="message"
            type="text"
            placeholder="Message"
          />
           </div>
           <div>
          <button>Submit</button>
          </div>
        </form>
        </div>
    </div>
 )


export default ContactForm