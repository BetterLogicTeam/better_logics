import React, { useEffect } from "react";
import "./Slider.css";
import $ from "jquery";
// import RoadMap from '../RoadMap/RoadMap';

export default function Slidercheck() {
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
      <div className="container">
        <div class="scroll-toggle">
          {/* <button class="scroll-toggle__button scroll-toggle__button--left">Scroll Left</button> */}

          <ul class="scroll-toggle__list">
            <li class="scroll-toggle__list-item">
              <div class="">
                <div class="nk-block">
                  <div
                    class="roadmap-wrap roadmap-wrap-ovl-right text-center animated fadeInUp"
                    data-animate="fadeInUp"
                    data-delay="0.3"
                  >
                    <div class="roadmap-line-s2"></div>
                    <div
                      class="roadmap-slider has-carousel carousel-nav-center owl-carousel owl-loaded owl-drag blank-added"
                      data-blank="true"
                      data-items="5"
                      data-items-tab-l="4"
                      data-items-tab-p="3"
                      data-items-mobile="2"
                      data-margin="-1"
                      data-navs="true"
                    >
                      <div class="owl-stage-outer">
                        <div class="owl-stage">
                          <div
                            class="owl-item active"
                            style={{ width: "297.333px" }}
                          >
                            <div class="roadmap roadmap-s2 roadmap-i1 roadmap-finished">
                              <h6 class="roadmap-year-s2">Q1 2018</h6>
                              <h5 class="title title-sm roadmap-date">
                                Jan - Apr 2018
                              </h5>
                              <div class="roadmap-text">
                                <p>
                                  Creation of a decentralize martketplace to
                                  neural network adjacent coefficients.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            class="owl-item active"
                            style={{ width: "297.333px", marginRight: "-1px" }}
                          >
                            <div class="roadmap roadmap-s2 roadmap-i2 roadmap-running">
                              <h6 class="roadmap-year-s2">Q2 2018</h6>
                              <h5 class="title title-sm roadmap-date">
                                Jul - Aug 2018
                              </h5>
                              <div class="roadmap-text">
                                <p>
                                  Start of the ICO Crypto Platform Development
                                  and Introduction of advertiser auctions
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            class="owl-item active"
                            style={{ width: "297.333px", marginRight: "-1px" }}
                          >
                            <div class="roadmap roadmap-s2 roadmap-i3">
                              <h6 class="roadmap-year-s2">Q3 2018</h6>
                              <h5 class="title title-sm roadmap-date">
                                Sep - Oct 2018
                              </h5>
                              <div class="roadmap-text">
                                <p>
                                  Start Private Token Sale Round to our
                                  contributors.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            class="owl-item active"
                            style={{ width: "297.333px", marginRight: "-1px" }}
                          >
                            <div class="roadmap roadmap-s2 roadmap-i4">
                              <h6 class="roadmap-year-s2">Q4 2018</h6>
                              <h5 class="title title-sm roadmap-date">
                                Nov - Dec 2018
                              </h5>
                              <div class="roadmap-text">
                                <p>
                                  Launch of the mobile Best versions of the
                                  Publisher application and Press Tour.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            class="owl-item"
                            style={{ width: "297.333px", marginRight: "-1px" }}
                          >
                            <div class="roadmap roadmap-s2 roadmap-i5">
                              <h6 class="roadmap-year-s2">Q1 2019</h6>
                              <h5 class="title title-sm roadmap-date">
                                Jan - Apr 2019
                              </h5>
                              <div class="roadmap-text">
                                <p>
                                  Release of the initial versions of operational
                                  applications and smart contracts.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            class="owl-item"
                            style={{ width: "297.333px", marginRight: "-1px" }}
                          >
                            <div class="roadmap roadmap-s2 roadmap-i6">
                              <h6 class="roadmap-year-s2">Q2 2019</h6>
                              <h5 class="title title-sm roadmap-date">
                                Jul - Aug 2019
                              </h5>
                              <div class="roadmap-text">
                                <p>
                                  Creation of a decentralize martketplace to
                                  neural network adjacent coefficients.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            class="owl-item"
                            style={{ width: "297.333px", marginRight: "-1px" }}
                          >
                            <div class="item-blank"></div>
                          </div>
                        </div>
                      </div>
                    </div>
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
              className="owl-prev   scroll-toggle__button scroll-toggle__button--left"
            ></button>
            <button
              type="button"
              role="presentation"
              className="owl-next  scroll-toggle__button scroll-toggle__button--right"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
