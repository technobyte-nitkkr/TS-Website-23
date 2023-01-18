import EventCard from "../Card/EventCard";
import papyrusVitaeEventImage from "../../../../public/assets/events/papyrus-vitae.png";
import programmingEventImage from "../../../../public/assets/events/programming.png";
import "./EventCarousel.css";
import Button from "../../Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

const EventCarousel = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
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
          disabledClass: "swiper-button-disabled"
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <div className="carouselCardContainer">
        <SwiperSlide><EventCard
          eventImage={papyrusVitaeEventImage}
          eventTitle="Papyrus Vitae"
        /></SwiperSlide>
        <SwiperSlide><EventCard
          eventImage={programmingEventImage}
          eventTitle="Programming"
        /></SwiperSlide>
        <SwiperSlide><EventCard
          eventImage={papyrusVitaeEventImage}
          eventTitle="Papyrus Vitae"
        /></SwiperSlide>
        <SwiperSlide><EventCard
          eventImage={programmingEventImage}
          eventTitle="Programming"
        /></SwiperSlide>
      </div>
      <div className="buttonContainer" id="aboutElementHelper">
        <Button btnText="View them all" />
      </div>
      </Swiper>
    </div>
  );
};

export default EventCarousel;
