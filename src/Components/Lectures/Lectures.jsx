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
      .catch((err) => {});
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
                    <GuestCard item={item} index={index} expanded={expanded} setExpanded={setExpanded}/>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <>
              {guestList.map((item, index) => {
                return (
                  <GuestCard item={item} index={index} expanded={expanded} setExpanded={setExpanded}/>
                );
              })}
            </>
          )}
        </div>
        <span id="glHelper"></span>
      </div>
    </>
  );
};

export default Lecture;

const GuestCard = ({index, item, expanded, setExpanded})=>{
  return(
  <div key={index} className="profile-card p-4 m-4 flex flex-col">
    <div className="profile-header pb-4">
      <img src={item.imageUrl} className="mr-4"/>
      <div className="flex flex-col items-start">
        <h1 className="text-xl font-normal">{item.name}</h1>
        <h2 className="text-md text-gray-400">{item.date}</h2>
      </div>
    </div>
    <div class="profile-bio overflow-y-scroll bg-[#1C1C1C] p-2 mb-4">
      <p>
          {item.desc}
      </p>
    </div>
    <ul class="profile-social-links flex justify-evenly mb-4">
      <li>
        <a href={item?.insta}>
          <FaInstagram className="faSocial" />
        </a>
      </li>
      <li>
        <a href={item?.linkedin}>
          <FaLinkedin className="faSocial" />
        </a>
      </li>
      <li>
        <a href={item?.facebook}>
          <FaFacebook className="faSocial" />
        </a>
      </li>
    </ul>
  </div>)
}
