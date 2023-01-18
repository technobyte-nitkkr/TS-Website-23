import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import EventCarousel from "../Components/Events/Carousel/EventCarousel";
import Homecontainer from "../Components/Homecontainer/Homecontainer";
import HomePage from "../Components/HomePage/HomePage";
import Lecture from "../Components/Lectures/Lectures";
import Registration from "../Components/Registration/Registration";
import Sponsors from "../Components/Sponsors/Sponsors";
import TestimonialCarousel from "../Components/Testimonial/Carousel/TestimonialCarousel";
import TimeLine from "../Components/Timeline/TimeLine";
import "./Home.css";

const Home = (props) => {
  const { hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      console.log("hash: ", hash);
      switch (hash) {
        case "#sponsors":
          document
            .getElementById("sponsorElementHelper")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
        case "#events":
          document
            .getElementById("sponsorElement")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
        case "#about":
          document
            .getElementById("aboutElementHelper")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
        case "#lectures":
          console.log("here");
          document
            .getElementById("glHelper")
            ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [key, hash]);
  return (
    <div className="home-div">
      <HomePage />
      <div className="notifPopupContainer">
        <TimeLine />
      </div>
      <Homecontainer heading={"Meet Our Sponsors"} element={<Sponsors />} />
      <Homecontainer heading={"Event Categories"} element={<EventCarousel />} />
      <Homecontainer heading={"Guest Lectures"} element={<Lecture />} />
      <Homecontainer heading={"About Techspardha"} element={<Registration />} />
      <Homecontainer
        heading={"Testimonials"}
        element={<TestimonialCarousel />}
      />
    </div>
  );
};

export default Home;