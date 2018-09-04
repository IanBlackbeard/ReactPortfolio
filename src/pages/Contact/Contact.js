import React, { Component } from "react";
import "./Contact.css";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2 id="contact">GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
        <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="ian-nowicki"><a class="LI-simple-link" href='https://www.linkedin.com/in/ian-nowicki?trk=profile-badge'>Ian Nowicki</a></div>
        <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="ian-nowicki"><a class="LI-simple-link" href='https://www.linkedin.com/in/ian-nowicki?trk=profile-badge'>Ian Nowicki</a></div>
      </div>
    );
  }
}
 
export default Contact;