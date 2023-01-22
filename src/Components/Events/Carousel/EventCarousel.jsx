import EventCard from "../Card/EventCard";
import Event from "../EventDetail/Event";
import papyrusVitaeEventImage from "../../../../public/assets/events/papyrus-vitae.png";
import programmingEventImage from "../../../../public/assets/events/programming.png";
import Button from "../../Button/Button";

import { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./EventCarousel.css";
import axios from "axios";

const EventCarousel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const closeOverlay = () => setIsOpen(false);
  const configs = {
    animate: true,
  };

  useEffect(() => {
    axios.get("/events/categories").then((res) => {
      const categories = res.data.data.categories;
      console.log("sponsors: ", categories);
      // setSponsors(sponsors);
      setCategories(categories);
      setIsLoading(false);
    });
  }, []);

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
            spaceBetween: 20,
          },
        }}
        spaceBetween={3000}
        centeredSlides={true}
        slideWidhth
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="carouselCardContainer">
         {
          isLoading ? (
            <div> Loading.... </div>
          ) : (
            categories.map((category, key) => {
              return (
                <SwiperSlide key={key}>
                  <div
                    onClick={() => {
                      setIsOpen(true);
                    }}
                    style={{ marginLeft: "25px", marginRight: "25px" }}
                  >
                    <EventCard
                      eventImage={category.imgUrl}
                      eventTitle={category.categoryName}
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    />
                  </div>
                </SwiperSlide>
              );
            })
          )
         }

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
      <Event show={isOpen} onClickOutside={closeOverlay} />
      {/* </Overlay> */}
    </div>
  );
};

export default EventCarousel;
