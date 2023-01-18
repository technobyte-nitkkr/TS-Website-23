import EventCard from "../Card/EventCard";
import Event from "../EventDetail/Event";
import papyrusVitaeEventImage from "../../../../public/assets/events/papyrus-vitae.png";
import programmingEventImage from "../../../../public/assets/events/programming.png";
import "./EventCarousel.css";
import Button from "../../Button/Button";
import Overlay from "react-overlay-component";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

const EventCarousel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeOverlay = () => setIsOpen(false);
  const configs = {
    animate: true,
  };

  return (
    <div>
      <Swiper
      breakpoints={{
        576: {
          width: 576,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 2,
          spaceBetween:100,
        },
      }}
        spaceBetween={100}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
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
        <div className="carouselCardContainer">
          <SwiperSlide>
            <EventCard
              eventImage={papyrusVitaeEventImage}
              eventTitle="Papyrus Vitae"
            />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard
              eventImage={programmingEventImage}
              eventTitle="Programming"
            />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard
              eventImage={papyrusVitaeEventImage}
              eventTitle="Papyrus Vitae"
            />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard
              eventImage={programmingEventImage}
              eventTitle="Programming"
            />
          </SwiperSlide>
        </div>
      </Swiper>
      <div
        className="buttonContainer"
        id="glHelper"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Button btnText="View them all" />
      </div>
      {/* <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}> */}
      <Event show={isOpen} onClickOutside={closeOverlay}/>
      {/* </Overlay> */}
    </div>
  );
};

export default EventCarousel;
