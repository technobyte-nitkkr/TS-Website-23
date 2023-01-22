import TestimonialCard from "../Card/TestimonialCard";
import "./TestimonialCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import reviews from "../Testimonial.json";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
const TestimonialCarousel = () => {
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
        spaceBetween={70}
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
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <div className="carouselCardContainer">

        {reviews.data.map((item, index) => (
        
            <SwiperSlide>
              <TestimonialCard name={item.name} profileImg={"/assets/avatars/avatar.svg"} review={item.review} course={item.course} branch={item.branch}/>
            </SwiperSlide>
            /* <div class="cardBox">
              <div class="testimonial">
                <div class="pic">
                  <img src={item.imageUrl} />
                </div>
                <h3 class="title">{item.name}</h3>
                <span class="post">
                  <p>
                    {item.course} ( {item.branch} ), {item.year} 
                  </p>
                </span>
                <p class="description">{item.review}</p>
              </div>
            </div> */
          
        ))}
        
        {/* <SwiperSlide><TestimonialCard name={"Aman Sani"} profileImg={"/assets/avatars/avatar.svg"} postition={"UX/UI Designer"}/></SwiperSlide>
        <SwiperSlide><TestimonialCard name={"Aman Sani"} profileImg={"/assets/avatars/avatar.svg"} postition={"UX/UI Designer"}/></SwiperSlide>
        <SwiperSlide><TestimonialCard name={"Aman Sani"} profileImg={"/assets/avatars/avatar.svg"} postition={"UX/UI Designer"}/></SwiperSlide>
        <SwiperSlide><TestimonialCard name={"Aman Sani"} profileImg={"/assets/avatars/avatar.svg"} postition={"UX/UI Designer"}/></SwiperSlide> */}
      </div>
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
