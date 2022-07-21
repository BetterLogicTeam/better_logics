import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Portfolio.css";

function Portfolio_main() {
  return (
    <div className="cont-width" style={{ marginTop: "90px" }}>
      <div class="container ">
        <div class="row d-flex justify-content-center">
          <div class="col-md-7  col-12">
            <div className="folio_main">
              <h3 class="home-h3">My name Is Umar Farooq</h3>
              <p class="home-p">
                I am a blockchain developer. I have over 4+ Years of experience
                in blockchain development , building cryptocurrencies, NFT
                staking, minting and marketplace dapps, defi dapps,
                decentralized exchange and decentralized donation platform. If
                you have any queries , I am Available 24/7 get in touch to
                discuss details.
              </p>
              <div class="mas">
                <button class="custom-btn btn-9">Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="">
            <div className="desktop">
              <Swiper
                // style={{ backgroundColor: "#fef8f8"}}
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                  responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: "40px",
                        slidesToShow: 3,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: "40px",
                        slidesToShow: 1,
                      },
                    },
                  ],
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="res_div">
              <Swiper
                // style={{ backgroundColor: "#fef8f8"}}
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                  responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: "40px",
                        slidesToShow: 3,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: "40px",
                        slidesToShow: 1,
                      },
                    },
                  ],
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <a href="" class="card">
                    <img
                      src="https://i.imgur.com/oYiTqum.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>{" "}
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio_main;
