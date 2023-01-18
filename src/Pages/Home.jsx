import EventCarousel from "../Components/Events/Carousel/EventCarousel";
import Homecontainer from "../Components/Homecontainer/Homecontainer";
import HomePage from "../Components/HomePage/HomePage";
import Registration from "../Components/Registration/Registration";
import Sponsors from "../Components/Sponsors/Sponsors";
import TestimonialCarousel from "../Components/Testimonial/Carousel/TestimonialCarousel";

const Home = () => {
  return (
    <div
      // style={{
      //   paddingLeft: "3rem",
      // }}
      className="home-div"
    >
      {/* <div className="home-div"> */}
      <HomePage />
      <Homecontainer heading={"Meet Our Sponsors"} element={<Sponsors />} />
      <Homecontainer heading={"Event Categories"} element={<EventCarousel />} />
      <Homecontainer heading={"Registeration"} element={<Registration />} />
      <Homecontainer
        heading={"Testimonials"}
        element={<TestimonialCarousel />}
      />
      {/* </div> */}
    </div>
  );
};

export default Home;
