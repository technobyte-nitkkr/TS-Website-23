import { useEffect } from "react";
import Glimpses from "../../Components/About/Glimpses/Glimpses";
import InstallApp from "../../Components/About/InstallApp/InstallApp";
import Homecontainer from "../../Components/Homecontainer/Homecontainer";
import Registration from "../../Components/Registration/Registration";
import "./About.css";

const About = () => {
  useEffect(() => {
    document.getElementById("homePageTop")?.scrollBy(0, screenY); // scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="aboutPageContainer" id="homePageTop">
      <Homecontainer heading={"About Techspardha"} element={<Registration />} />
      <Homecontainer
        heading={"Install the Techspardha app"}
        element={<InstallApp />}
      />
      <Homecontainer
        heading={"Some glimpses from the past..."}
        element={<Glimpses />}
      />
      <Homecontainer
        heading={"Checkout Techspardha'18 aftermovie"}
        element={
          <div>
            <div className="video-responsive">
              <iframe
                width="360"
                height="115"
                src="https://www.youtube.com/embed/NyHq7Pp1PuY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default About;
