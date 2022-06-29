import React from "react";
import "./Footer.css";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithubAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer-contact-area bg-img bg-overlay akhr bg-fixed section-padding-100">
        <div className="container akhr2">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-lg-3">
              <div className="footer-single-widget mb-50">
                <div className="footer_logo">
                  <a href="#"><img src="BlLOGO.png" alt="Image" /></a>
                </div>
                <div className="footer_para">
                  Crypto Ico is a blockchain platform that allows users to make
                  payments, create and request loans and crowdfund projects.
                </div>

                <div className="footer-socila-icon">
                  <a href="#">
                    <i>
                      <TiSocialFacebook></TiSocialFacebook>
                    </i>
                  </a>
                  <a href="#">
                    <i>
                      <TiSocialTwitter></TiSocialTwitter>
                    </i>
                  </a>
                  <a href="#">
                    <i>
                      <GrLinkedinOption></GrLinkedinOption>
                    </i>
                  </a>
                  <a href="#">
                    <i>
                      <FaGithubAlt></FaGithubAlt>
                    </i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-8 col-lg-9">
              <div className="row">
                <div className="col-sm-3 col-lg-4">
                  <div className="footer-single-widget mb-50">
                    <h5 className="footer_five">Useful Links</h5>
                    <ul>
                    <li>
                        <a href="index.html"><Link to="/">Home</Link></a>
                      </li>
                      <li>
                        <a href="index.html">Portfolio</a>
                      </li>
                      <li>
                        <a href="about.html">Our Services</a>
                      </li>
                      <li>
                        <a href="benefits.html"><Link to="/Ourteam_main">Our Team</Link></a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-3 footer-single">
                  <ul>
                    <li>
                      <a href="roadmap.html"><Link to="/Crypto_main">About Us</Link></a>
                    </li>
                    <li>
                      <a href="mint.html"><Link to="/Contact_main">Contact Us</Link></a>
                    </li>
                    <li>
                      <a href="#">Sign in</a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="footer-single-widget third mb-50">
                    <h5 className="tweet">Twitter Feed</h5>
                    <div className="f-add-info mt-30">
                      <p className="alna">
                        More about our most powerful theme Crypto ICO :
                        https://t.co/JHBAS345
                      </p>
                      <p className="alna">
                        More infotamation about CIC Coin :
                        https://t.co/JHSD34JHB
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p className="last_pa">
                      Copyright © 2018, Crypto ICO. Template Designed by
                      Pixinvent
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
