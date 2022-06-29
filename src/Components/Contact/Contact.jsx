import React from "react";
import "./Contact.css";
import { FiHeadphones } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";

function Contact() {
  return (
    <div>
      <div className="contact_div">
        <div className="container">
          {" "}
          <h1 className="textbackgroundhere contact_sub-title">JOIN US</h1>
          <h2 className=" title-xl contact_title text-white" title="">
            CONTACT
          </h2>
          <p className="text-white contact_p">
            Have questions? We’re happy to help.
          </p>
          <div className="headphone">
            <i>
              <span className="footer-icon">
                <FiHeadphones></FiHeadphones>
              </span>
              <span className="short">+44 0123 4567</span>
            </i>

            <i>
              <span className="footer-icon">
                <MdOutlineMailOutline></MdOutlineMailOutline>
              </span>
              <span className="short">info@yourcompany.com</span>
            </i>

            <i>
              <span className="footer-icon">
                <BiMessageDetail></BiMessageDetail>
              </span>
              <span className="short">Join us on Telegram</span>
            </i>
          </div>
          <div id="container_id">
            <span className="input">
              <input type="text" className="input__field" id="input-1" />
              <label for="input-1" className="input__label">
                <span className="input__label-content">First Name</span>
              </label>
            </span>

            <span className="input">
              <input type="text" className="input__field" id="input-2" />
              <label for="input-2" className="input__label">
                <span className="input__label-content">Last Name</span>
              </label>
            </span>

            <span className="input">
              <input type="text" className="input__field" id="input-3" />
              <label for="input-3" className="input__label">
                <span className="input__label-content">Phone Number</span>
              </label>
            </span>

            <span className="input">
              <input type="text" className="input__field" id="input-4" />
              <label for="input-4" className="input__label">
                <span className="input__label-content">Email Address</span>
              </label>
            </span>

            <span className="input message">
              <textarea className="input__field" id="input-5"></textarea>
              <label for="input-5" className="input__label">
                <span className="input__label-content">Message</span>
              </label>
            </span>

            <div className="btttn">
              <a href="" className="btn">
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
