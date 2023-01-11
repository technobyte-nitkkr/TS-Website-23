import TestimonialCard from "../Card/TestimonialCard";
import "./TestimonialCarousel.css";

const TestimonialCarousel = () => {
  return (
    <div>
      <div className="carouselCardContainer">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
