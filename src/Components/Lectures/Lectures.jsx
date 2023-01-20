import React, { useEffect, useRef, useState } from "react";
import "./Lectures.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
const Lecture = () => {
  const [guestList, SetGuestList] = useState([]);
  const scrollref = useRef(null);
  const size = useWindowSize();
  var lectures = [];
  const [expanded, setExpanded] = useState(0);

  useEffect(() => {
    fetch(
      "https://us-central1-techspardha-87928.cloudfunctions.net/api2/lectures",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        lectures = data.data.lectures;
        SetGuestList(data.data.lectures);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="mainContentGL">
        <div className="carouselGL">
          {size.width < 768 ? (
            <Swiper
              breakpoints={{
                576: {
                  width: 576,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 3,
                  spaceBetween: 200,
                },
              }}
              spaceBetween={100}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: ".image-swiper-button-next",
                prevEl: ".image-swiper-button-prev",
                disabledClass: "swiper-button-disabled",
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {guestList.map((item, index) => {
                return (
                  <SwiperSlide>
                    <div key={index} class="profile-card">
                      <header>
                        <img src={item.imageUrl} />
                        <h1>{item.name}</h1>
                        <h2>{item.date}</h2>
                      </header>
                      <div class="profile-bio">
                        <p>
                          {expanded !== index + 1
                            ? item.desc.substring(0, 200)
                            : item.desc}
                        </p>
                      </div>
                      {expanded !== index + 1 && (
                        <div
                          className="buttonarrow"
                          onClick={() => {
                            setExpanded(index + 1);
                          }}
                        >
                          Show More
                        </div>
                      )}
                      {expanded === index + 1 && (
                        <div
                          className="buttonarrow"
                          onClick={() => {
                            setExpanded(0);
                          }}
                        >
                          Show Less
                        </div>
                      )}
                      <ul class="profile-social-links">
                        <li>
                          <a href="">
                            <FaInstagram className="faSocial" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <FaLinkedin className="faSocial" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <FaFacebook className="faSocial" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <>
              {guestList.map((item, index) => {
                return (
                  <div key={index} class="profile-card">
                    <header>
                      <img src={item.imageUrl} />
                      <h1>{item.name}</h1>
                      <h2>{item.date}</h2>
                    </header>
                    <div class="profile-bio">
                      <p>
                        {expanded !== index + 1
                          ? item.desc.substring(0, 200)
                          : item.desc}
                      </p>
                    </div>
                    {expanded !== index + 1 && (
                      <div
                        className="buttonarrow"
                        onClick={() => {
                          setExpanded(index + 1);
                        }}
                      >
                        Show More
                      </div>
                    )}
                    {expanded === index + 1 && (
                      <div
                        className="buttonarrow"
                        onClick={() => {
                          setExpanded(0);
                        }}
                      >
                        Show Less
                      </div>
                    )}
                    <ul class="profile-social-links">
                      <li>
                        <a href="">
                          <FaInstagram className="faSocial" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FaLinkedin className="faSocial" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <FaFacebook className="faSocial" />
                        </a>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <span id="aboutElementHelper"></span>
      </div>
    </>
  );
};

export default Lecture;
