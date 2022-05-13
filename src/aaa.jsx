import React from "react";
import "./Boot.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import contact1 from "./contact1.png";
import contact2 from "./contact2.png";
import location from "./location.png";
import mail from "./mail.png";
import Iframe from "react-iframe";
const Boot = () => {
  return (
      <section className="contact-container">
        <div className="contact-div">
          <div className="left-section">
          <h3 class="text-uppercase pb-4 font-weight-bold custom-font-h3 pt-2 text-uppercase">About Us</h3>
            <p>
              Our institution provides an excellent student experience in
              language learning.We provide,
              <ul>
                <li>IDP Certified trainers</li>
                <li>Full money back quranteed sessions</li>
                <li>Quality reading and Speaking Session</li>
                <li>Special focus for listening</li>
                <li>Detailed tips and tricks for reading</li>
              </ul>
            </p>
          </div>
          <div className="middle-section">
          <h3 class="text-uppercase pb-4 font-weight-bold custom-font-h3 pt-2 text-uppercase">Address</h3>
            <img src={contact1}></img>
            <a href="tel:9809459729">+91 8593820942</a><br/>
            <img src={contact2} id="image"></img>&nbsp;&nbsp;
            <a href="tel:8593820942">+91 8593820942</a>
            <br />
            <img src={mail}></img>
            <a href="mailto:karanarjun4u@gmail.com">
              karanarjun4u@gmail.com
            </a>
            <br />
            <img src={location}></img>
            <a href="#">Perumbavoor, Kerala</a>
          </div>
          <div className="right-section">
          <h3 class="text-uppercase pb-4 font-weight-bold custom-font-h3 pt-2 text-uppercase">Location</h3>
            <Iframe width="75%" className="embed-responsive-item" height="70%"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31065.15180836627!2d76.46859651558776!3d10.098638796945089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e2bd2f94f713%3A0xd376970c675b2a4e!2sIELTS%20special%2010%20classes!5e0!3m2!1sen!2sin!4v1643609895558!5m2!1sen!2sin" 
             style="border:0;" allowfullscreen="" loading="lazy"/>
          </div>
        </div>
      </section>
  );
};

export default Boot;
