import React, { useEffect } from "react";
import "./Ourteamstyle.css";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";
import $ from "jquery";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { SiWhatsapp } from "react-icons/si";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body className=" mdlbghere">
        <div className="row">
          <div className="col-lg-6">
            <div class="team-photo">
              <img src="user-7.png" alt="team" />
            </div>
          </div>

          <div className="col-lg-6">
            <div class="team-popup-info pl-md-3">
              <h3 class="hxn title title-lg pt-4">Louis Baker</h3>
              <p class="team-position">CEO &amp; Lead Blockchain</p>
              <ul class="team-social team-social-s2 mb-4">
                <li>
                  <a href="#">
                    <i className="rcticn">
                      <TiSocialFacebook></TiSocialFacebook>
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <em class="fab fa-linkedin-in"></em>
                  </a>
                </li>
              </ul>
              <p className="ptexther">
                He is a great man to work Lorem ipsum dolor sit amet, consec
                tetur adipis icing elit. Simi lique, autem.{" "}
              </p>
              <p className="ptexther">
                Tenetur quos facere magnam volupt ates quas esse Sedrep ell
                endus mole stiae tates quas esse Sed repell endus molesti aela
                uda ntium quis quam iusto minima thanks.
              </p>
              <div class="progress-list">
                <div class="progress-wrap">
                  <div class="progress-title">
                    Blockchain <span class="progress-amount">85%</span>
                  </div>
                  <div class="progress-bar progress-bar-xs bg-black-10">
                    {/* <div class="progress-percent bg-primary" data-percent="85" style={{ width: '85%' }} >

                                                    </div> */}
                    <ProgressBar variant="dark" className="bgbr" now={85} />
                  </div>
                </div>
                <div class="progress-wrap">
                  <div class="progress-title">
                    Decentralization <span class="progress-amount">68%</span>
                  </div>
                  <div class="progress-bar progress-bar-xs bg-black-10">
                    {/* <div class="progress-percent bg-primary" data-percent="68"    style={{ width: '68%' }} >

                                                    </div> */}
                    <ProgressBar variant="dark" className="bgbr" now={68} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default function Ourteam() {
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    class ScrollToggle {
      constructor(element) {
        this.container = element;
        this.toggles = this.container.querySelectorAll(
          ".scroll-toggle__button"
        );
        this.list = this.container.querySelector(".scroll-toggle__list");
        this.listItems = this.list.querySelectorAll(
          ".scroll-toggle__list-item"
        );
        this.scrollValue = 0;
      }
      init() {
        this.toggles.forEach((toggle) => {
          toggle.addEventListener("mousedown", (e) => {
            this.move(e.target);
          });
          toggle.addEventListener("mouseup", (e) => {
            this.stop();
          });
        });
      }
      move(target) {
        if (target.classList.contains("scroll-toggle__button--right")) {
          this.interval = setInterval(() => {
            this.list.scrollLeft += 1;
          }, 1);
        } else {
          this.interval = setInterval(() => {
            this.list.ScrollLeft = this.scrollValue;
            this.list.scrollLeft -= 1;
          }, 1);
        }
      }
      stop() {
        if (this.list.scrollLeft > 0) {
          this.scrollValue = this.list.scrollLeft;
        }
        clearInterval(this.interval);
      }
    }

    document.querySelectorAll(".scroll-toggle").forEach((el) => {
      const scrollToggle = new ScrollToggle(el);
      scrollToggle.init();
    });
  }, [$]);

  return (
    <div>
      <div className="our_team_div">
        <div className="container">
          <p className="team_sub-title">CREATIVE</p>
          <h2 className="team_title">TEAM</h2>

          <p className="headingdivPsection our_team_p ">
            A cryptocurrency (or crypto currency) is a digital asset designed to
            work as a medium <br></br>of exchange that uses cryptography to
            secure its transactions.
          </p>
          <div class="scroll-toggle">
            {/* <button class="scroll-toggle__button scroll-toggle__button--left">Scroll Left</button> */}

            <ul class="scroll-toggle__list">
              <li class="scroll-toggle__list-item">
                <div
                  class="owl-item active FIRSTDIVINTEAMHERE"
                  style={{ width: "100%", marginRight: "30px" }}
                >
                  <div
                    class="item animated fadeInUp"
                    data-animate="fadeInUp"
                    data-delay="0.3"
                  >

{/* <div class="col-sm-12 col-md-6 col-lg-4 mb-5 animated flipInX" data-animation="flipInX" data-animation-delay="0.8s" style={{animationDelay: "0.8s", opacity: "1"}}>
                    <div class="d-flex team-member">
                        <div class="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                            <img src="user-12.png" alt="team-profile-1" class="rounded-circle" width="128"/>
                        </div>
                        <div class="profile align-self-center">
                            <div class="name">Logan S. Perez</div>
                            <div class="role">CEO &amp; CFO</div>
                            <div class="social-profile mt-3">
                                <a href="#" title="Linkedin" class="font-medium grey-accent2 mr-2"><i class="ti-linkedin"></i></a>
                                <a href="#" title="Twitter" class="font-medium grey-accent2 mr-2"><i class="ti-twitter-alt"></i></a>
                                <a href="#" title="Github" class="font-medium grey-accent2"><i class="ti-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

<div class="team-img float-left mr-3" data-toggle="modal" data-target="#teamUser9">
                            <img src="user-12.png" alt="team-profile-1" class="rounded-circle" width="100%"/>
                        </div> */}
                    <div class="team team-s2 team-odd">
                      <div
                        class="team-photo team-photo-s2"
                        onClick={() => setModalShow(true)}
                      >
                        <img src="user-12.png" alt="" width="100%" />
                        <a
                          href="#team-popup-1"
                          class="team-show content-popup"
                        ></a>
                      </div>
                      <h5 class="hxn title title-md nameofdevelopere">
                        Louis Baker
                      </h5>
                      <span class="team-position nameofdevelopere">
                        CEO &amp; Lead Blockchain
                      </span>
                      <ul class="team-social team-social-s2  iconsectionhee">
                        <li>
                          <a href="#">
                            <TiSocialFacebook></TiSocialFacebook>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em class="fab fa-linkedin-in"></em>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i>
                              <TiSocialTwitter></TiSocialTwitter>
                            </i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li class="scroll-toggle__list-item">
                <div
                  class="owl-item active mtopsection"
                  style={{
                    width: "255px",
                    marginRight: "30px",
                    marginTop: "5rem",
                  }}
                >
                  <div
                    class="item animated fadeInUp"
                    data-animate="fadeInUp"
                    data-delay="0.3"
                  >
                    <div class="team team-s2 team-odd">
                      <div
                        class="team-photo team-photo-s2"
                        onClick={() => setModalShow(true)}
                      >
                        <img src="user-8.png" alt="" />
                        <a
                          href="#team-popup-1"
                          class="team-show content-popup"
                        ></a>
                      </div>
                      <h5 class="hxn title title-md">Stefan Harary</h5>
                      <span class="team-position">
                        CTO &amp; Senior Developer
                      </span>
                      <ul class="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <i>
                              <TiSocialFacebook></TiSocialFacebook>
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em class="fab fa-linkedin-in"></em>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i>
                              <TiSocialTwitter></TiSocialTwitter>
                            </i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li class="scroll-toggle__list-item">
                <div
                  class="owl-item active"
                  style={{ width: "255px", marginRight: "30px" }}
                >
                  <div
                    class="item animated fadeInUp"
                    data-animate="fadeInUp"
                    data-delay="0.3"
                  >
                    <div class="team team-s2 team-odd">
                      <div
                        class="team-photo team-photo-s2"
                        onClick={() => setModalShow(true)}
                      >
                        <img src="user1.jpg" alt="" />
                        <a
                          href="#team-popup-1"
                          class="team-show content-popup"
                        ></a>
                      </div>
                      <h5 class="hxn title title-md">Moises Teare</h5>
                      <span class="team-position">
                        Blockchain App Developer
                      </span>
                      <ul class="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <i>
                              <TiSocialFacebook></TiSocialFacebook>
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em class="fab fa-linkedin-in"></em>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i>
                              <TiSocialTwitter></TiSocialTwitter>
                            </i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li class="scroll-toggle__list-item">
                <div
                  class="owl-item active mtopsection"
                  style={{
                    width: "255px",
                    marginRight: "30px",
                    marginTop: "5rem",
                  }}
                >
                  <div
                    class="item animated fadeInUp"
                    data-animate="fadeInUp"
                    data-delay="0.3"
                  >
                    <div class="team team-s2 team-odd">
                      <div
                        class="team-photo team-photo-s2"
                        onClick={() => setModalShow(true)}
                      >
                        <img src="user-9.png" alt="" />
                        <a
                          href="#team-popup-1"
                          class="team-show content-popup"
                        ></a>
                      </div>
                      <h5 class="hxn title title-md">Louis Baker</h5>
                      <span class="team-position">
                        CEO &amp; Lead Blockchain
                      </span>
                      <ul class="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <i>
                              <TiSocialFacebook></TiSocialFacebook>
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em class="fab fa-linkedin-in"></em>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i>
                              <TiSocialTwitter></TiSocialTwitter>
                            </i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li class="scroll-toggle__list-item">
                <div
                  class="owl-item active"
                  style={{ width: "255px", marginRight: "30px" }}
                >
                  <div
                    class="item animated fadeInUp"
                    data-animate="fadeInUp"
                    data-delay="0.3"
                  >
                    <div class="team team-s2 team-odd">
                      <div
                        class="team-photo team-photo-s2"
                        onClick={() => setModalShow(true)}
                      >
                        <img src="user-2.png" alt="" />
                        <a
                          href="#team-popup-1"
                          class="team-show content-popup"
                        ></a>
                      </div>
                      <h5 class="hxn title title-md">Louis Baker</h5>
                      <span class="team-position">
                        CEO &amp; Lead Blockchain
                      </span>
                      <ul class="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <i>
                              <TiSocialFacebook></TiSocialFacebook>
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em class="fab fa-linkedin-in"></em>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i>
                              <TiSocialTwitter></TiSocialTwitter>
                            </i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li class="scroll-toggle__list-item">
                <div
                  class="owl-item active"
                  style={{ width: "255px", marginRight: "30px" }}
                >
                  <div
                    class="item animated fadeInUp"
                    data-animate="fadeInUp"
                    data-delay="0.3"
                  >
                    <div class="team team-s2 team-odd">
                      <div
                        class="team-photo team-photo-s2"
                        onClick={() => setModalShow(true)}
                      >
                        <img src="user-11.png" alt="" />
                        <a
                          href="#team-popup-1"
                          class="team-show content-popup"
                        ></a>
                      </div>
                      <h5 class="hxn title title-md">Louis Baker</h5>
                      <span class="team-position">
                        CEO &amp; Lead Blockchain
                      </span>
                      <ul class="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <TiSocialFacebook></TiSocialFacebook>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em class="fab fa-linkedin-in"></em>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i>
                              <TiSocialTwitter></TiSocialTwitter>
                            </i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="scroll-toggle__list-item">
                <div
                  class="owl-item active"
                  style={{ width: "255px", marginRight: "30px" }}
                >
                  <div
                    class="item animated fadeInUp"
                    data-animate="fadeInUp"
                    data-delay="0.3"
                  >
                    <div class="team team-s2 team-odd">
                      <div
                        class="team-photo team-photo-s2"
                        onClick={() => setModalShow(true)}
                      >
                        <img src="user-3.png" alt="" />
                        <a
                          href="#team-popup-1"
                          class="team-show content-popup"
                        ></a>
                      </div>
                      <h5 class="hxn title title-md">Louis Baker</h5>
                      <span class="team-position">
                        CEO &amp; Lead Blockchain
                      </span>
                      <ul class="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <i>
                              <TiSocialFacebook></TiSocialFacebook>
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em class="fab fa-linkedin-in"></em>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i>
                              <TiSocialTwitter></TiSocialTwitter>
                            </i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* <button class="scroll-toggle__button scroll-toggle__button--right">Scroll Right</button> */}
            <div class="owl-nav">
              <button
                type="button"
                role="presentation"
                class="owl-prev   scroll-toggle__button scroll-toggle__button--left"
              ></button>
              <button
                type="button"
                role="presentation"
                class="owl-next  scroll-toggle__button scroll-toggle__button--right"
              ></button>
            </div>
          </div>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </div>
  );
}
