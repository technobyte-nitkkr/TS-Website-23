import TestimonialCard from "../Card/TestimonialCard";
import "./TestimonialCarousel.css";

const TestimonialCarousel = () => {
  return (
    <div>
      <div className="carouselCardContainer">
        <TestimonialCard name={"Aman Sani"} profileImg={"/assets/avatars/avatar.svg"} postition={"UX/UI Designer"}/>
        <TestimonialCard name={"Aman Sani"} profileImg={"/assets/avatars/avatar.svg"} postition={"UX/UI Designer"}/>
        <TestimonialCard name={"Aman Sani"} profileImg={"/assets/avatars/avatar.svg"} postition={"UX/UI Designer"}/>
        <TestimonialCard name={"Aman Sani"} profileImg={"/assets/avatars/avatar.svg"} postition={"UX/UI Designer"}/>
        <TestimonialCard name={"Aman Sani"} profileImg={"/assets/avatars/avatar.svg"} postition={"UX/UI Designer"}/>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
