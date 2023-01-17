import EventCarousel from "../Components/Events/Carousel/EventCarousel";
import Homecontainer from "../Components/Homecontainer/Homecontainer";
import HomePage from "../Components/HomePage/HomePage";
import Registration from "../Components/Registration/Registration";
import Sponsors from "../Components/Sponsors/Sponsors";
import TestimonialCarousel from "../Components/Testimonial/Carousel/TestimonialCarousel";
import image from "/assets/Main-background.svg";

const Home = () => {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: "#000000",
        height: "100vh",
        margin: "0px",
        overflowY: "scroll",
        overflowX: "hidden",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="home-div">
        <HomePage />
        <Homecontainer heading={"Meet Our Sponsors"} element={<Sponsors />} />
        <Homecontainer
          heading={"Event Categories"}
          element={<EventCarousel />}
        />
        <Homecontainer heading={"Registeration"} element={<Registration />} />
        <Homecontainer
          heading={"Testimonials"}
          element={<TestimonialCarousel />}
        />
      </div>
    </div>
  );
};

export default Home;
